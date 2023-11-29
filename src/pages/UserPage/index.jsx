import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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

import MyContent from '../MyContent';

const UserPage = () => {
  const { userId } = useParams();

  console.log('userId', userId);

  //user 정보
  const [user, setUser] = useState({});
  const [follow, setFollow] = useState({});

  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  const userInfo = async () => {
    console.log('userIduserIduserIduserId', userId);
    try {
      const res = await userApi.getUserInfoById(userId);
      setUser(res.data);
      setLinks(res.data.links);
      console.log('res', res);
    } catch (error) {
      console.log('error: ', error.response.data.message);
    }
  };

  const followInfo = async () => {
    try {
      const res = await userApi.follow(user._id);
      setFollow(res.data.data);
    } catch (error) {
      // console.log('error: ', error.response.data.message);
    }
  };

  const [tabName, setTabName] = useState('profile');

  const handleClickTab = (tabKey) => {
    setTabName(tabKey);
  };

  useEffect(() => {
    userId && userInfo();
  }, [userId]);

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
  console.log('user', user);

  return (
    <>
      <S.MyPageWrap>
        <Header
          typeLeft={'BACK'}
          typeCenter={'TEXT'}
          textCenter={user.name}
          headerStyle={{
            borderBottom: `1px solid ${CS.color.contentTertiary}`,
          }}
          leftOnClickEvent={() => navigate(-1)}
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
            src={user.profile_url}
            isEditable={false}
            profileSize={2}
            existFollow={true}
            followers={follow?.followingNumber}
            followings={follow?.followerNumber}
            style={{
              margin: 20,
              height: 'auto',
            }}
            onClickFollower={handleOnClickFollower}
            onClickFollowing={handleOnClickFollowing}
          />
        </S.ProfileWrap>
        <S.ButtonWrap>
          <BasicButton
            text="팔로우"
            textStyle={{
              font: CS.font.labelSmall,
              color: CS.color.black,
            }}
            btnStyle={{
              border: `1px solid ${CS.color.contentTertiary}`,
              background: CS.color.white,
              width: '50%',
              height: 30,
              borderRadius: 7,
              marginRight: 4,
            }}
          />
          <BasicButton
            text="메세지"
            textStyle={{
              font: CS.font.labelSmall,
              color: CS.color.black,
            }}
            btnStyle={{
              border: `1px solid ${CS.color.contentTertiary}`,
              background: CS.color.white,
              width: '50%',
              height: 30,
              borderRadius: 7,
              marginLeft: 4,
            }}
          />
        </S.ButtonWrap>
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
        {/* <EmptyContent type={tabName} /> */}
      </S.MyPageWrap>
    </>
  );
};

export default UserPage;
