import { createBrowserRouter } from 'react-router-dom';
// import MainPage from "../pages/MainPage";
import React from 'react';
import Home from '../pages/Home';
import QNA from '../pages/QNA';
import Recruitment from '../pages/Recruitment';
import MyPage from '../pages/MyPage';
import Landing from '../pages/Landing';
import IntroLinkEdit from '../pages/IntroLinkEdit';
import IntroNewLink from '../pages/IntroNewLink';

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
    element: <IntroLinkEdit />,
  },
  {
    path: '/newlink',
    element: <IntroNewLink />,
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
