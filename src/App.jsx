import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { RouterProvider, Routes } from 'react-router-dom';
import ProfileDetail from './components/profile/ProfileDetail';
import ProfileTag from './components/profile/ProfileTag';
import router from './router/routes';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ProfileTag
        name="hi"
        rate="레이서"
        createdAt="2023-11-17 20:59:00"
        existFollow={true}
        isFollow={true}
        existMore={true}
      />
      <ProfileDetail
        name={'김엘리스'}
        genType={'SW 엔지니어 트랙'}
        genNum={'6기'}
        rate={'레이서'}
        followers={30}
        followings={30}
        existFollow={true}
        isFollow={false}
        isList={false}
      />
    </>
  );
};

export default App;
