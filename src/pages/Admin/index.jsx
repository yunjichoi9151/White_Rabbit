import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import TabBar from '../../components/profile/TabBar';
import CheckBox from '../../components/common/CheckBox';
import BasicButton from '../../components/common/BasicButton';
import TableHeader from '../../components/admin/TableHeader';
import TableRow from '../../components/admin/TableRow';

const Admin = () => {
  const [isAdmitted, setIsAdmitted] = useState(false);
  const [currentTabKey, setCurrentTabKey] = useState('0');

  const handleTabClick = (tabKey) => {
    setCurrentTabKey(tabKey);
  };

  const handleCheckBoxChange = (e) => {
    if (e.target.checked) {
      console.log('체크되었습니다.');
    } else {
      console.log('해제되었습니다.');
    }
  };

  const handleAdmitClick = () => {
    setIsAdmitted(!isAdmitted);
  };

  const handleAddClick = () => {
    console.log('추가 버튼 클릭');
  };

  const handleRemoveClick = () => {
    console.log('삭제 버튼 클릭');
  };

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
      />
      <TabBar
        tabNames={['회원 관리', '기수 관리', '스킬 관리']}
        currentTabKey={currentTabKey}
        onTabClick={handleTabClick}
        style={{ paddingTop: '60px' }}
      />
      {currentTabKey === '0' ? (
        <>
          <CheckBox
            text={'승인 대기만 보기'}
            textColor={CS.color.contentSecondary}
            style={{
              padding: '12px',
              justifyContent: 'flex-end',
              margin: 0,
              height: 'auto',
            }}
            onChange={handleCheckBoxChange}
          />
          <TableHeader haderTexts={['이름', '이메일', '상태', '승인']} />
          <TableRow
            colTexts={[
              '송재천',
              'BEcoach@elice.com',
              `${isAdmitted ? '승인 완료' : '승인 대기'}`,
            ]}
            btnText={isAdmitted ? '취소' : '승인'}
            btnColor={isAdmitted ? CS.color.negative : CS.color.primary}
            handleBtnClick={handleAdmitClick}
          />
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
          <TableRow
            colTexts={['1', 'JavaScript']}
            btnText={'삭제'}
            btnColor={CS.color.negative}
            handleBtnClick={handleRemoveClick}
          />
        </>
      )}
    </S.AdminWrap>
  );
};

export default Admin;
