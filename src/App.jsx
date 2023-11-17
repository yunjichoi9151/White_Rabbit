import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { RouterProvider, Routes } from 'react-router-dom';
import router from './router/routes';

const App = () => {
  const texts = ['팔로워', '팔로잉'];
  const isCountables = [true, true];

  const [name, setName] = useState('');
  const changeData = (e) => {
    setName(e.target.value);
  };

  const [currentTab, setCurrentTab] = useState('0');
  const handleTabClick = (tabKey) => {
    setCurrentTab(tabKey);
  };

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
