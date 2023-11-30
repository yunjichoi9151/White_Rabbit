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
import { followApi } from '../../../api/utils/Follow';

const UserPage = () => {
  const { userId } = useParams();

  //user 정보
  const [user, setUser] = useState({});
  const [isFollow, setIsFollow] = useState(false);
  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  const userInfo = async () => {
    try {
      const res = await userApi.getUserInfoById(userId);

      setIsFollow(res.data.user.is_follow);
      setUser(res.data);
      setLinks(res.data.links);
    } catch (error) {
      console.log('error: ', error.res.data.message);
    }
  };

  const followInfo = async () => {
    try {
      const res = await userApi.follow(user._id);

      setFollow(res.data.data);
    } catch (error) {}
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
      state: {
        ...user.user,
        _id: userId,
      },
    });
  };

  const handleOnClickFollowing = () => {
    navigate(`${ROUTER_LINK.FOLLOW.link}/following`, {
      state: {
        ...user.user,
        _id: userId,
      },
    });
  };

  const handleOnClickFollow = async (e) => {
    e.preventDefault();

    if (isFollow) {
      const response = await followApi.deleteFollow(userId);

      if (response.status === 200) {
        setIsFollow(false);
      }
    } else {
      const response = await followApi.postFollow(userId);
      if (response.status === 201) {
        setIsFollow(true);
      }
    }
  };

  return (
    <>
      <S.MyPageWrap>
        <Header
          typeLeft={'BACK'}
          typeCenter={'TEXT'}
          textCenter={user?.user?.name}
          headerStyle={{
            borderBottom: `1px solid ${CS.color.contentTertiary}`,
          }}
          leftOnClickEvent={() => navigate(-1)}
        />
        <S.ProfileWrap>
          <ProfileBar
            username={user?.user?.name}
            rate={
              user?.user?.roles === 'USER'
                ? '레이서'
                : user?.user?.roles === 'COACH'
                ? '코치'
                : user?.user?.roles === 'ADMIN'
                ? '관리자'
                : ''
            }
            genType={user?.user?.generation_type}
            genNum={user?.user?.generation_number + '기'}
            existGeneration={true}
            src={user?.user?.profile_url}
            isEditable={false}
            profileSize={2}
            existFollow={true}
            followers={user.follower}
            followings={user.following}
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
            handleOnClickButton={handleOnClickFollow}
            text={isFollow ? '팔로잉' : '팔로우'}
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
          <div style={{ background: CS.color.secondary, flex: 1 }}>
            <SkillLinkPage
              userId={user?.user?._id}
              links={links}
              setLinks={setLinks}
              skills={user?.user?.skills}
              isMe={false}
            />
          </div>
        )}
        {tabName === 'content' && (
          <MyContent type="content" userId={user?.user?._id} />
        )}

        {tabName === 'reply' && (
          <MyContent type="reply" userId={user?.user?._id} />
        )}
        {/* <EmptyContent type={tabName} /> */}
      </S.MyPageWrap>
    </>
  );
};

export default UserPage;
