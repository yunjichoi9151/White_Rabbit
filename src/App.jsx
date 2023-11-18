import React, { useState } from 'react';
import { RouterProvider, Routes } from 'react-router-dom';
import Post from './components/board/Post';
import TabBar from './components/profile/TabBar';
import router from './router/routes';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
