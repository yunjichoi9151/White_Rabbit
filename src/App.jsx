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
    </>
  );
};

export default App;
