import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { RouterProvider, Routes } from 'react-router-dom';
import ProfileTag from './components/profile/ProfileBar';
import router from './router/routes';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ProfileTag
        name="김엘리스"
        rate="레이서"
        existGeneration={true}
        genType="SW 엔지니어 트랙"
        genNum="6기"
        existTimeAgo={false}
        createdAt="2023-11-17 20:59:00"
        existFollow={true}
        followers={30}
        followings={30}
        existFollowBtn={true}
        isFollow={true}
        existMoreBtn={false}
        profileSize={3}
      />
    </>
  );
};

export default App;
