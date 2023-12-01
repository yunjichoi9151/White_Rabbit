import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../../api/utils/user';
import { ROUTER_LINK } from '../../router/routes';
import { IoSettingsOutline } from 'react-icons/io5';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import ProfileBar from '../../components/profile/ProfileBar';
import TabBar from '../../components/profile/TabBar';
import SkillLinkPage from '../SkillLinkPage';
import BasicButton from '../../components/common/BasicButton';
import Header from '../../components/common/Header';

import MyContent from '../MyContent';

const MyPage = () => {
  //user 정보
  const [user, setUser] = useState({});
  const [follow, setFollow] = useState({});

  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  const userInfo = async () => {
    try {
      const res = await userApi.getUserInfo();
      setUser(res.data.data);
      setLinks(res.data.data.links);
    } catch (error) {
      console.log('error: ', error.response.data.message);
    }
  };

  const followInfo = async () => {
    try {
      const res = await userApi.follow(user._id);
      setFollow(res.data.data);
    } catch (error) {}
  };

  const handleOnClickButton = async () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      const response = await userApi.logout();

      if (response.status === 200) {
        navigate(ROUTER_LINK.LANDING.path);
      }
    }
  };

  const [tabName, setTabName] = useState('profile');

  const handleClickTab = (tabKey) => {
    setTabName(tabKey);
  };

  useEffect(() => {
    userInfo();
  }, []);

  useEffect(() => {
    if (user._id) {
      followInfo();
    }
  }, [user]);

  const handleOnClickFollower = () => {
    navigate(`${ROUTER_LINK.FOLLOW.link}/follower`, {
      state: user,
    });
  };

  const handleOnClickFollowing = () => {
    navigate(`${ROUTER_LINK.FOLLOW.link}/following`, {
      state: user,
    });
  };

  return (
    <>
      <S.MyPageWrap>
        <Header
          typeLeft={'TEXT'}
          textLeft={'내 프로필'}
          headerStyle={{
            borderBottom: `1px solid ${CS.color.contentTertiary}`,
            whiteSpace: 'nowrap',
          }}
        />
        <S.ProfileWrap>
          <ProfileBar
            username={user.name}
            rate={
              user.roles === 'USER'
                ? '레이서'
                : user.roles === 'COACH'
                ? '코치'
                : user.roles === 'ADMIN'
                ? '관리자'
                : ''
            }
            genType={user.generation_type}
            genNum={user.generation_number + '기'}
            existGeneration={true}
            src={user.profile_url || '/assets/img/elice_icon.png'}
            isEditable={false}
            profileSize={2}
            existFollow={true}
            followers={follow?.followerNumber}
            followings={follow?.followingNumber}
            style={{
              margin: 20,
              height: 'auto',
            }}
            onClickFollower={handleOnClickFollower}
            onClickFollowing={handleOnClickFollowing}
          />
          <Link
            to={ROUTER_LINK.PROFILEEDIT.path}
            style={{
              display: 'block',
              width: 28,
              height: 28,
              marginTop: 20,
              marginRight: 20,
            }}
          >
            <IoSettingsOutline
              style={{
                cursor: 'pointer',
                fontSize: 28,
              }}
            />
          </Link>
        </S.ProfileWrap>
        <S.TabWrap>
          <TabBar
            tabNames={{ profile: '프로필', content: '게시물', reply: '댓글' }}
            existCounter={true}
            countNum={{ content: 0, reply: 0 }}
            onTabClick={handleClickTab}
            currentTabKey={tabName}
          />
        </S.TabWrap>

        {tabName === 'profile' && (
          <SkillLinkPage
            userId={user._id}
            links={links}
            setLinks={setLinks}
            skills={user.skills}
          />
        )}
        {tabName === 'content' && (
          <MyContent type="content" userId={user._id} />
        )}

        {tabName === 'reply' && <MyContent type="reply" userId={user._id} />}
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
