import React, { useState } from 'react';
import { RouterProvider, Routes } from 'react-router-dom';
import ProfileTag from './components/profile/ProfileBar';
import router from './router/routes';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
