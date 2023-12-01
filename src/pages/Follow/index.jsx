import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router';
import { useEffect } from 'react';
import { userApi } from '../../../api/utils/user';
import { followApi } from '../../../api/utils/Follow';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import TabBar from '../../components/profile/TabBar';
import ProfileBar from '../../components/profile/ProfileBar';

const userLabelText = {
  USER: '레이서',
  ADMIN: '관리자',
  COACH: '코치',
};

function Follow() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { type } = useParams();

  // tab
  const [tabName, setTabName] = useState(
    type === 'follower' ? 'follower' : 'following',
  );

  const handleClickTab = (tabKey) => {
    setTabName(tabKey);
  };

  // loginUser
  const [loginUser, setLoginUser] = useState([]);

  const getLoginUserInfo = async () => {
    try {
      const res = await userApi.getLoginUserInfo();
      setLoginUser(res.data.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  // followData
  const [followData, setFollowData] = useState({
    follower: [],
    following: [],
  });

  const getFollowList = async () => {
    const response = await userApi.followList(state._id);
    const { follower, following } = response.data;

    setFollowData({
      follower,
      following,
    });
  };

  // follow click
  const handleOnClickFollow = async (followerInfo) => {
    try {
      if (followerInfo.is_follow) {
        const response = await followApi.deleteFollowById(followerInfo._id);

        if (response.status === 200) {
          getFollowList();
        }
      } else {
        const response = await followApi.postFollow(followerInfo._id);
        if (response.status === 201) {
          getFollowList();
        }
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    getLoginUserInfo();
    getFollowList();
  }, []);

  return (
    <>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        textCenter={state.name}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
        }}
        leftOnClickEvent={() => navigate(-1)}
      />
      <S.TabWrap>
        <TabBar
          tabNames={{
            follower: `팔로워 ${followData.follower.length}명`,
            following: `팔로잉 ${followData.following.length}명`,
          }}
          onTabClick={handleClickTab}
          currentTabKey={tabName}
        />
      </S.TabWrap>

      {followData[tabName].map((follower, index) => (
        <>
          <ProfileBar
            username={follower.name}
            rate={`${userLabelText[follower.roles]}`}
            genType={follower.generation_type}
            genNum={follower.generation_number + '기'}
            existGeneration={true}
            src={follower.profile_url || '/assets/img/elice_icon.png'}
            isEditable={false}
            profileSize={2}
            existFollowBtn={loginUser._id !== follower._id}
            isFollow={follower.is_follow}
            handleOnClickFollow={() => handleOnClickFollow(follower)}
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginBottom: 20,
              paddingRight: 40,
              height: 'auto',
            }}
            handleOnClickBar={() =>
              navigate(
                ROUTER_LINK.USERPAGE.path.replace(':userId', follower._id),
              )
            }
          />
          <S.UnderLine />
        </>
      ))}
    </>
  );
}

export default Follow;
