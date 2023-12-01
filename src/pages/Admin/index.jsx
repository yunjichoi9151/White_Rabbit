import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import TabBar from '../../components/profile/TabBar';
import CheckBox from '../../components/common/CheckBox';
import BasicButton from '../../components/common/BasicButton';
import BasicModal from '../../components/common/BasicModal';
import TableHeader from '../../components/admin/TableHeader';
import TableRow from '../../components/admin/TableRow';
import { skillApi } from '../../../api/utils/Skill';
import { userApi } from '../../../api/utils/user';
import { generationApi } from '../../../api/utils/Generation';
import InputBar from '../../components/common/InputBar';

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdmittedOnly, setIsAdmittedOnly] = useState(false);
  const [currentTabKey, setCurrentTabKey] = useState('0');
  const [members, setMembers] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [skills, setSkills] = useState([]);

  const navigate = useNavigate();

  const handleTabClick = (tabKey) => {
    setCurrentTabKey(tabKey);
  };

  const handleCheckBoxChange = (e) => {
    setIsAdmittedOnly(!isAdmittedOnly);
  };

  const handleAdmitClick = async (member) => {
    try {
      const res = await userApi.modifyUserInfo(member._id, {
        is_coach: !member.is_coach,
      });
      setMembers((prevMembers) => {
        const updatedMembers = prevMembers.map((m) =>
          m._id === member._id ? { ...m, is_coach: !m.is_coach } : m,
        );
        return updatedMembers;
      });
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const handleGenerationRemoveClick = async (id) => {
    try {
      const res = await generationApi.deleteGeneration(id);
      fetchGenerations();
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const handleSkillRemoveClick = async (id) => {
    try {
      const res = await skillApi.delteSkill(id);
      fetchSkills();
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const handleLogoutClick = async () => {
    try {
      const res = await userApi.logout();
      console.log(res);
      if (res.status === 200) {
        navigate(ROUTER_LINK.LANDING.path);
      }
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  // 로그인 정보 조회 => 관리자가 아니면 HOME 으로 이동
  const fetchUserInfo = async () => {
    try {
      const res = await userApi.getLoginUserInfo();
      const userRole = res.data.data.roles;

      if (userRole === 'ADMIN') {
        setIsAdmin(true);
      } else {
        alert('관리자만 접근 가능합니다.');
        navigate(ROUTER_LINK.HOME.path);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await userApi.getAllUsers();
      setMembers(res.data.data);
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const fetchGenerations = async () => {
    try {
      const res = await generationApi.getAllGenerations();
      console.log(res.data.data);
      setGenerations(res.data.data);
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const fetchSkills = async () => {
    try {
      const res = await skillApi.getAllSkills();
      setSkills(res.data);
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const [isGenerationModalOpen, setIsGenerationModalOpen] = useState(false);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  const openModal = () => {
    switch (currentTabKey) {
      case '1':
        setIsGenerationModalOpen(true);
        break;
      case '2':
        setIsSkillModalOpen(true);
        break;
    }
  };

  const closeModal = () => {
    switch (currentTabKey) {
      case '1':
        setIsGenerationModalOpen(false);
        break;
      case '2':
        setIsSkillModalOpen(false);
        break;
    }
  };

  const [inputGenType, setInputGenType] = useState('');
  const [inputGenNumber, setInputGenNumber] = useState(0);

  const addGeneration = () => {
    try {
      if (!inputGenType || !inputGenNumber) {
        alert('모든 값을 입력 해주세요.');
        return;
      }
      if (isNaN(inputGenNumber)) {
        alert('기수는 숫자만 입력 가능합니다.');
        return;
      }
      generationApi.postGeneration(inputGenType, inputGenNumber);
      alert('추가 되었습니다.');
      closeModal();
      fetchGenerations();
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const [inputSkillValue, setInputSkillValue] = useState('');

  const addSkill = () => {
    try {
      skillApi.postSkill(inputSkillValue);
      alert('추가 되었습니다.');
      closeModal();
      fetchSkills();
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
    fetchUsers();
    fetchGenerations();
    fetchSkills();
  }, []);

  return (
    <S.AdminWrap>
      {isAdmin && (
        <>
          <Header
            typeLeft={'TEXT'}
            typeRight={'TEXT'}
            textLeft={'관리자'}
            textRight={'로그아웃'}
            headerStyle={{
              borderBottom: `1px solid ${CS.color.borderTransparent}`,
            }}
            rightOnClickEvent={() => handleLogoutClick()}
          />
          <TabBar
            tabNames={['코치 권한 관리', '기수 관리', '스킬 관리']}
            currentTabKey={currentTabKey}
            onTabClick={handleTabClick}
            style={{ paddingTop: '60px' }}
          />
          {currentTabKey === '0' ? (
            <>
              <CheckBox
                checked={isAdmittedOnly}
                text={'승인 대기만 보기'}
                textStyle={{
                  color: CS.color.contentSecondary,
                  font: CS.font.labelSmall,
                }}
                style={{
                  padding: '12px',
                  justifyContent: 'flex-end',
                  margin: 0,
                  height: 'auto',
                }}
                onChange={handleCheckBoxChange}
              />
              <TableHeader haderTexts={['이름', '이메일', '상태', '승인']} />
              {members
                .filter(
                  (member) =>
                    member.roles === 'COACH' &&
                    (isAdmittedOnly ? member.is_coach === false : true),
                )
                .map((member, index) => (
                  <TableRow
                    colTexts={[
                      member.name,
                      member.email,
                      `${member.is_coach ? '승인 완료' : '승인 대기'}`,
                    ]}
                    btnText={member.is_coach ? '취소' : '승인'}
                    btnColor={
                      member.is_coach ? CS.color.negative : CS.color.primary
                    }
                    handleBtnClick={() => handleAdmitClick(member)}
                  />
                ))}
            </>
          ) : currentTabKey === '1' ? (
            <>
              <S.ButtonWrap>
                <BasicButton
                  text={'추가'}
                  textStyle={{
                    font: CS.font.labelSmall,
                    color: CS.color.white,
                    padding: '4px 8px',
                    borderRadius: '4px',
                    justifyContent: 'center',
                    backgroundColor: CS.color.accent,
                  }}
                  btnStyle={{
                    width: 'auto',
                    padding: '8px',
                  }}
                  handleOnClickButton={openModal}
                />
              </S.ButtonWrap>
              <TableHeader haderTexts={['No.', '트랙명', '기수', '관리']} />
              {generations.map((generation, index) => (
                <TableRow
                  key={`row-${index}`}
                  colTexts={[
                    index + 1,
                    generation.type,
                    generation.number + '기',
                  ]}
                  btnText={'삭제'}
                  btnColor={CS.color.negative}
                  handleBtnClick={() =>
                    handleGenerationRemoveClick(generation._id)
                  }
                />
              ))}
              {isGenerationModalOpen && (
                <BasicModal
                  closeModal={closeModal}
                  children={
                    <>
                      <div style={{ paddingTop: '12px' }}>
                        <InputBar
                          placeholder={'트랙을 입력하세요.'}
                          inputStyle={{ fontSize: '1.25rem' }}
                          inputBarStyle={{
                            padding: '4px',
                            border: `solid 1px ${CS.color.borderTransparent}`,
                            borderRadius: '4px',
                          }}
                          handleOnChangeValue={(e) =>
                            setInputGenType(e.target.value)
                          }
                        />
                        <InputBar
                          placeholder={'기수를 입력하세요.'}
                          inputStyle={{ fontSize: '1.25rem' }}
                          inputBarStyle={{
                            padding: '4px',
                            border: `solid 1px ${CS.color.borderTransparent}`,
                            borderRadius: '4px',
                          }}
                          handleOnChangeValue={(e) => {
                            setInputGenNumber(e.target.value);
                          }}
                        />
                        <BasicButton
                          text="추가"
                          textStyle={{ padding: '12px' }}
                          btnStyle={{ width: '100%' }}
                          handleOnClickButton={addGeneration}
                        />
                      </div>
                    </>
                  }
                />
              )}
            </>
          ) : (
            <>
              <S.ButtonWrap>
                <BasicButton
                  text={'추가'}
                  textStyle={{
                    font: CS.font.labelSmall,
                    color: CS.color.white,
                    padding: '4px 8px',
                    borderRadius: '4px',
                    justifyContent: 'center',
                    backgroundColor: CS.color.accent,
                  }}
                  btnStyle={{
                    width: 'auto',
                    padding: '8px',
                  }}
                  handleOnClickButton={openModal}
                />
              </S.ButtonWrap>
              <TableHeader haderTexts={['No.', '스킬', '관리']} />
              {skills.map((skill, index) => (
                <TableRow
                  key={index}
                  colTexts={[index + 1, skill.skill]}
                  btnText={'삭제'}
                  btnColor={CS.color.negative}
                  handleBtnClick={() => handleSkillRemoveClick(skill._id)}
                />
              ))}
              {isSkillModalOpen && (
                <BasicModal
                  closeModal={closeModal}
                  children={
                    <>
                      <div style={{ paddingTop: '12px' }}>
                        <InputBar
                          placeholder={'스킬명을 입력하세요.'}
                          inputStyle={{ fontSize: '1.25rem' }}
                          inputBarStyle={{
                            padding: '4px',
                            border: `solid 1px ${CS.color.borderTransparent}`,
                            borderRadius: '4px',
                          }}
                          handleOnChangeValue={(e) =>
                            setInputSkillValue(e.target.value)
                          }
                        />
                        <BasicButton
                          text="추가"
                          textStyle={{ padding: '12px' }}
                          btnStyle={{ width: '100%' }}
                          handleOnClickButton={addSkill}
                        />
                      </div>
                    </>
                  }
                />
              )}
            </>
          )}
        </>
      )}
    </S.AdminWrap>
  );
};

export default Admin;
