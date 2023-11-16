import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { RouterProvider, Routes } from 'react-router-dom';
import router from './router/routes';
import BasicText from './components/common/BasicText';
import BasicImage from './components/common/BasicImage';
import BasicInput from './components/common/BasicInput';
import TabBar from './components/Profile/TabBar';

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
    // <div>
    //   <div>
    //     <div>hello!</div>
    //     <BasicText text='hihi' size='30px' />
    //     <BasicImage src='/assets/img/back.jpg' size='5rem' />
    //     <BasicInput
    //       id='num'
    //       type='string'
    //       value={name}
    //       handleOnChangeValue={changeData}
    //       placeholder='입력하세요'
    //     />
    //   </div>
    // </div>
    // <TabBar
    //   texts={texts}
    //   isCountables={isCountables}
    //   currentTab={currentTab}
    //   onTabClick={handleTabClick}
    // />
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
