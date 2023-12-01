import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router';
import { useEffect } from 'react';
import { userApi } from '../../../api/utils/user';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import TabBar from '../../components/profile/TabBar';
import ProfileBar from '../../components/profile/ProfileBar';

function Follow() {
  const location = useLocation();

  const [followData, setFollowData] = useState({
    follower: [],
    following: [],
  });

  const { state } = location;

  const { type } = useParams();

  const [tabName, setTabName] = useState(
    type === 'follower' ? 'follower' : 'following',
  );
  const navigate = useNavigate();

  const handleClickTab = (tabKey) => {
    setTabName(tabKey);
  };

  const getFollowList = async () => {
    const response = await userApi.followList(state._id);

    const { follower, following } = response.data;

    setFollowData({
      follower,
      following,
    });
  };

  useEffect(() => {
    getFollowList();
  }, []);

  const userLabelText = {
    USER: '레이서',
    ADMIN: '관리자',
    COACH: '코치',
  };

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
        <Link
          key={`${follower._id}_${index}`}
          to={`${ROUTER_LINK.USERPAGE.link}/${follower._id}`}
        >
          <ProfileBar
            username={follower.name}
            rate={`${userLabelText[follower.roles]}`}
            genType={follower.generation_type}
            genNum={follower.generation_number + '기'}
            existGeneration={true}
            src={follower.profile_url}
            isEditable={false}
            profileSize={2}
            existFollowBtn={true}
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginBottom: 20,
              paddingRight: 40,
              height: 'auto',
            }}
            isFollow={follower.is_follow}
            followId={follower.followId}
          />
          <S.UnderLine />
        </Link>
      ))}
    </>
  );
}

export default Follow;
