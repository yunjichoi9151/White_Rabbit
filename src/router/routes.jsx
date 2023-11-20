import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import QNA from '../pages/QNA';
import Recruitment from '../pages/Recruitment';
import MyPage from '../pages/MyPage';
import Landing from '../pages/Landing';
import LinkEdit from '../pages/IntroLinkEdit';
import NewLink from '../pages/IntroNewLink';
import Join from '../pages/Join';
import FindPW from '../pages/FindPW';

export const ROUTER_LINK = {
  LANDING: { path: '/', link: '/' },
  HOME: { path: '/home', link: '/home' },
  QNA: { path: '/qna', link: '/qna' },
  RECRUITMENT: { path: '/recruitment', link: '/recruitment' },
  MYPAGE: { path: '/mypage', link: '/mypage' },
  LINKEDIT: { path: '/linkedit', link: '/linkedit' },
  NEWLINK: { path: '/newlink', link: '/newlink' },
  JOIN: { path: '/join', link: '/join' },
  FINDPW: { path: '/findpw', link: '/findpw' },
};

const router = createBrowserRouter([
  {
    path: ROUTER_LINK.LANDING.path,
    element: <Landing />,
  },
  {
    path: ROUTER_LINK.HOME.path,
    element: <Home />,
  },
  {
    path: ROUTER_LINK.QNA.path,
    element: <QNA />,
  },
  {
    path: ROUTER_LINK.RECRUITMENT.path,
    element: <Recruitment />,
  },
  {
    path: ROUTER_LINK.MYPAGE.path,
    element: <MyPage />,
  },
  {
    path: ROUTER_LINK.LINKEDIT.path,
    element: <LinkEdit />,
  },
  {
    path: ROUTER_LINK.NEWLINK.path,
    element: <NewLink />,
  },
  {
    path: ROUTER_LINK.JOIN.path,
    element: <Join />,
  },
  {
    path: ROUTER_LINK.FINDPW.path,
    element: <FindPW />,
  },
]);

export default router;
