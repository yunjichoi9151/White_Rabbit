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
import NewSkill from '../pages/IntroNewSkill';
import RootContainer from '../pages/RootContainer/RootContainer';
import ProfileEdit from '../pages/ProfileEdit';
import Detail from '../pages/Detail';
import Write from '../pages/Write';
import Admin from '../pages/Admin';
import Follow from '../pages/Follow';
import UserPage from '../pages/UserPage';

export const ROUTER_LINK = {
  LANDING: { path: '/', link: '/' },
  HOME: { path: '/home', link: '/home' },
  QNA: { path: '/qna', link: '/qna' },
  RECRUITMENT: { path: '/recruitment', link: '/recruitment' },
  MYPAGE: { path: '/mypage', link: '/mypage' },
  LINKEDIT: { path: '/linkedit/:userId', link: '/linkedit' },
  NEWLINK: { path: '/newlink/:userId', link: '/newlink' },
  JOIN: { path: '/join', link: '/join' },
  FINDPW: { path: '/findpw', link: '/findpw' },
  NEWSKILL: { path: '/newskill/:userId', link: '/newskill' },
  PROFILEEDIT: { path: '/profileedit', link: '/profileedit' },
  DETAIL: { path: '/post/:postId', link: '/post' },
  WRITE: { path: '/write', link: '/write' },
  ADMIN: { path: '/admin', link: '/admin' },
  FOLLOW: { path: '/follow/:type', link: '/follow' },
  USERPAGE: { path: '/userpage/:userId', link: '/userpage' },
  POSTEDIT: { path: '/post/:postId/edit', link: '/posts' },
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootContainer />,
    children: [
      {
        path: ROUTER_LINK.ADMIN.path,
        element: <Admin />,
      },
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
      {
        path: ROUTER_LINK.NEWSKILL.path,
        element: <NewSkill />,
      },
      {
        path: ROUTER_LINK.PROFILEEDIT.path,
        element: <ProfileEdit />,
      },
      {
        path: ROUTER_LINK.DETAIL.path,
        element: <Detail />,
      },
      {
        path: ROUTER_LINK.WRITE.path,
        element: <Write />,
      },
      {
        path: ROUTER_LINK.FOLLOW.path,
        element: <Follow />,
      },
      {
        path: ROUTER_LINK.USERPAGE.path,
        element: <UserPage />,
      },
      {
        path: ROUTER_LINK.POSTEDIT.path,
        element: <Write isEdit={true} />,
      },
    ],
  },
]);

export default router;
