import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { RouterProvider, Routes } from 'react-router-dom';
import router from './router/routes';

const App = () => {
  const [name, setName] = useState('');
  const changeData = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
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
