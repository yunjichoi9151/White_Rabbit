import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import { IoSettingsOutline } from 'react-icons/io5';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import ProfileBar from '../../components/profile/ProfileBar';
import TabBar from '../../components/profile/TabBar';
import SkillLinkPage from '../SkillLinkPage';
import BasicButton from '../../components/common/BasicButton';
import EmptyContent from '../EmptyContent';

const MyPage = () => {
  const handleOnClickButton = () => {
    alert('로그아웃 하시겠습니까?');
  };

  const [tabName, setTabName] = useState('profile');

  const handleClickTab = (tabKey) => {
    setTabName(tabKey);
  };

  return (
    <>
      <S.MyPageWrap>
        <S.ProfileWrap>
          <ProfileBar
            username="김엘리스"
            rate="레이서"
            genType={'SW 엔지니어 트랙'}
            genNum={'6기'}
            existGeneration={true}
            src="/assets/img/account.png"
            isEditable={false}
            profileSize={2}
            existFollow={true}
            followers={30}
            followings={30}
            style={{
              margin: 20,
              height: 'auto',
            }}
          />
          <Link to={ROUTER_LINK.PROFILEEDIT.path}>
            <IoSettingsOutline
              style={{
                cursor: 'pointer',
                fontSize: 28,
                marginTop: 20,
                marginRight: 20,
              }}
            />
          </Link>
        </S.ProfileWrap>
        <S.TabWrap>
          <TabBar
            tabNames={{ profile: '프로필', content: '게시물', reply: '댓글' }}
            existCounter={true}
            countNum={{ content: 0, reply: 0 }}
            defaultActive={'profile'}
            onTabClick={handleClickTab}
          />
        </S.TabWrap>

        {tabName === 'profile' && <SkillLinkPage />}
        {tabName === 'content' && <EmptyContent />}
        {/* {tabName === 'content' && <reply />} */}
        <S.LogoutBtn
          style={{
            backgroundColor: CS.color.secondary,
          }}
        >
          <BasicButton
            text="로그아웃"
            textStyle={{
              color: CS.color.contentTertiary,
              font: CS.font.labelSmall,
            }}
            btnStyle={{ height: 50 }}
            handleOnClickButton={handleOnClickButton}
          />
        </S.LogoutBtn>
      </S.MyPageWrap>
    </>
  );
};

export default MyPage;
