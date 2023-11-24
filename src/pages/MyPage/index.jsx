import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userApi } from '../../../api/utils/user';
import { ROUTER_LINK } from '../../router/routes';
import { IoSettingsOutline } from 'react-icons/io5';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import ProfileBar from '../../components/profile/ProfileBar';
import TabBar from '../../components/profile/TabBar';
import SkillLinkPage from '../SkillLinkPage';
import BasicButton from '../../components/common/BasicButton';
import EmptyContent from '../EmptyContent';
import Header from '../../components/common/Header';

import userData from '../../test/user.json';
import MyContent from '../MyContent';

const MyPage = () => {
  //user 정보
  const [user, setUser] = useState({});
  const [follow, setFollow] = useState({});
  const { userId } = useParams();

  const userInfo = async () => {
    try {
      const res = await userApi.getUserInfoById(userId);
      setUser(res.data.data.user);
      console.log('res', res);
    } catch (error) {
      console.log(error);
    }
  };
  const users = userData.data;

  const followInfo = async () => {
    try {
      const res = await userApi.follow(userId);
      setFollow(res.data.data.follow);
      console.log('res', res);
    } catch (error) {
      console.log(error);
    }
  };

  //follow 수

  const handleOnClickButton = () => {
    alert('로그아웃 하시겠습니까?');
  };

  const [tabName, setTabName] = useState('profile');

  const handleClickTab = (tabKey) => {
    setTabName(tabKey);
  };

  useEffect(() => {
    userInfo();
    followInfo();
  }, []);

  return (
    <>
      <S.MyPageWrap>
        <Header
          typeLeft={'TEXT'}
          textLeft={`내 프로필`}
          headerStyle={{
            borderBottom: `1px solid ${CS.color.contentTertiary}`,
          }}
        />
        <S.ProfileWrap>
          <ProfileBar
            username={users.name}
            rate={users.roles}
            genType={users.generation_type}
            genNum={users.generation_number + '기'}
            existGeneration={true}
            src={users.profile_url}
            isEditable={false}
            profileSize={2}
            existFollow={true}
            followers={follow.followingNumber}
            followings={follow.followerNumber}
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
            currentTabKey={tabName}
          />
        </S.TabWrap>

        {tabName === 'profile' && <SkillLinkPage />}
        {/* //post api -> user id === user api -> user id ? <MyContent /> : <EmptyContent /> */}
        {/* {tabName === 'content' && <EmptyContent type="content" />} */}
        {tabName === 'content' && <MyContent type="content" />}

        {tabName === 'reply' && <EmptyContent type="reply" />}
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
