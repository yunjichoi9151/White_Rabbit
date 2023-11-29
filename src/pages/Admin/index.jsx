import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import TabBar from '../../components/profile/TabBar';
import CheckBox from '../../components/common/CheckBox';
import BasicButton from '../../components/common/BasicButton';
import TableHeader from '../../components/admin/TableHeader';
import TableRow from '../../components/admin/TableRow';
import { skillApi } from '../../../api/utils/Skill';
import { userApi } from '../../../api/utils/user';

const Admin = () => {
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

  const handleAddClick = () => {
    console.log('추가 버튼 클릭');
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

  const fetchUsers = async () => {
    try {
      const res = await userApi.getAllUsers();
      console.log(res.data.data);
      setMembers(res.data.data);
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

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <S.AdminWrap>
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
              handleOnClickButton={handleAddClick}
            />
          </S.ButtonWrap>
          <TableHeader haderTexts={['No.', '트랙명', '기수', '관리']} />
          <TableRow
            colTexts={['1', 'SW 엔지니어 트랙', '6기']}
            btnText={'삭제'}
            btnColor={CS.color.negative}
            handleBtnClick={handleRemoveClick}
          />
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
              handleOnClickButton={handleAddClick}
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
        </>
      )}
    </S.AdminWrap>
  );
};

export default Admin;
