import { createBrowserRouter } from 'react-router-dom';
// import MainPage from "../pages/MainPage";
import React from 'react';
import Home from '../pages/Home';
import QNA from '../pages/QNA';
import Recruitment from '../pages/Recruitment';
import MyPage from '../pages/MyPage';
import Landing from '../pages/Landing';
import Link_Edit from '../pages/Intro_Link_Edit/Link_Edit';
import New_Link_Edit from '../pages/Intro_Link_Edit/New_Link_Edit';

const router = createBrowserRouter([
  {
    path: '',
    element: <Landing />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: 'qna',
    element: <QNA />,
  },
  {
    path: 'recruitment',
    element: <Recruitment />,
  },
  {
    path: 'mypage',
    element: <MyPage />,
  },
  {
    path: '/linkedit',
    element: <Link_Edit />,
  },
  {
    path: '/newlink',
    element: <New_Link_Edit />,
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
