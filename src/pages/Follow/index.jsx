import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import TabBar from '../../components/profile/TabBar';
import ProfileBar from '../../components/profile/ProfileBar';
import { useNavigate, useParams, useLocation } from 'react-router';
import { useEffect } from 'react';
import { userApi } from '../../../api/utils/user';

function Follow() {
  const location = useLocation();

  const { state } = location;

  const { type } = useParams();

  console.log("state", state)

  const [tabName, setTabName] = useState(type === "follower" ? "follower" : "following");
  const navigate = useNavigate();

  const handleClickTab = (tabKey) => {
    setTabName(tabKey);
  };

  const getFollowList = async() => {
    const response = await userApi.followList(state._id);

    console.log("response", response)
  }


  useEffect(() => {
    // getFollowList()
  }, [])
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
          tabNames={{ follower: '팔로워', following: '팔로잉' }}
          onTabClick={handleClickTab}
          currentTabKey={tabName}
        />
      </S.TabWrap>
      {/* <S.ProfileWrap> */}
      {/* <ProfileBar
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
      /> */}
      {/* </S.ProfileWrap> */}
    </>
  );
}

export default Follow;
