import { createBrowserRouter } from 'react-router-dom';
// import MainPage from "../pages/MainPage";
import Home from '../pages/Home';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  // {
  //   path: "",
  //   element: <LandingPage />,
  // },
  // {
  //   path: "main",
  //   element: <MainPage />,
  // },
]);

export default router;
