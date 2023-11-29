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
  const [currentTabKey, setCurrentTabKey] = useState('2');
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

  const handleRemoveClick = async (id) => {
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

  const [inputValue, setInputValue] = useState('');

  const addSkill = () => {
    try {
      skillApi.postSkill(inputValue);
      alert('추가되었습니다.');
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
              {generations.map((generation, index) =>
                Array.from(
                  { length: generation.max_generation },
                  (_, rowIndex) => (
                    <TableRow
                      key={`row-${index}-${rowIndex}`}
                      colTexts={[
                        index + rowIndex + 1,
                        generation.generation_type,
                        rowIndex + 1 + '기',
                      ]}
                      btnText={'삭제'}
                      btnColor={CS.color.negative}
                      handleBtnClick={handleRemoveClick}
                    />
                  ),
                ),
              )}
              {isGenerationModalOpen && (
                <BasicModal
                  closeModal={closeModal}
                  children={
                    <>
                      <div style={{ paddingTop: '12px' }}>
                        <InputBar
                          handleOnChangeValue={(e) =>
                            setInputValue(e.target.value)
                          }
                        />
                        <BasicButton
                          text="수정"
                          textStyle={{ padding: '12px' }}
                          // handleOnClickButton={editPost}
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
                  handleBtnClick={() => handleRemoveClick(skill._id)}
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
                            setInputValue(e.target.value)
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
