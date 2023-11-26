import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import TabBar from '../../components/profile/TabBar';
import ProfileBar from '../../components/profile/ProfileBar';
import { useNavigate } from 'react-router';

function Follow() {
  const [tabName, setTabName] = useState('follower');
  const navigate = useNavigate();

  const handleClickTab = (tabKey) => {
    setTabName(tabKey);
  };
  return (
    <>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        textCenter={'유저 이름'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
        }}
        leftOnClickEvent={() => navigate(-1)}
      />
      <S.TabWrap>
        <TabBar
          tabNames={{ follower: '팔로워', following: '팔로잉' }}
          defaultActive={'follower'}
          onTabClick={handleClickTab}
          currentTabKey={tabName}
        />
      </S.TabWrap>
      {/* <S.ProfileWrap> */}
      <ProfileBar
      // username={users.name}
      // rate={users.roles}
      // genType={users.generation_type}
      // genNum={users.generation_number + '기'}
      // existGeneration={true}
      // src={users.profile_url}
      // isEditable={false}
      // profileSize={2}
      // existFollow={true}
      // followers={follow.followingNumber}
      // followings={follow.followerNumber}
      // style={{
      //   margin: 20,
      //   height: 'auto',
      // }}
      />
      {/* </S.ProfileWrap> */}
    </>
  );
}

export default Follow;
