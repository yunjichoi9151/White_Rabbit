import React, { useState } from 'react';
import { RouterProvider, Routes } from 'react-router-dom';
import router from './router/routes';
import SkillLinkPage from './pages/SkillLinkPage';
import LinkIntro from './components/SkillLinkIntro/LinkIntro';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
