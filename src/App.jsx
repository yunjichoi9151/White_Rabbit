import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { RouterProvider, Routes } from 'react-router-dom';
import router from './router/routes';
import BasicText from './components/common/BasicText';
import BasicImage from './components/common/BasicImage';
import BasicInput from './components/common/BasicInput';

const App = () => {
  const [name, setName] = useState('');
  const changeData = (e) => {
    setName(e.target.value);
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
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
