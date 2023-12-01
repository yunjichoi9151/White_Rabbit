import React, { useEffect } from 'react';
import * as CS from '../../styles/CommonStyles';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar';
import { ROUTER_LINK } from '../../router/routes';
import { getCookie } from '../../utils/convertTimeAgo';
import { userApi } from '../../../api/utils/user';

const RootContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const routerNav = [
    ROUTER_LINK.MYPAGE.link,
    ROUTER_LINK.HOME.link,
    ROUTER_LINK.QNA.link,
    ROUTER_LINK.RECRUITMENT.link,
    ROUTER_LINK.USERPAGE.link,
  ];

  const guestRoute = [
    ROUTER_LINK.LANDING.link,
    ROUTER_LINK.JOIN.link,
    ROUTER_LINK.FINDPW.link,
  ];

  const splitPathName = location.pathname.split('/');

  // 로그인 정보 조회 => 관리자가 아니면 HOME 으로 이동
  const fetchUserInfo = async () => {
    try {
      await userApi.getLoginUserInfo();
    } catch (error) {
      if (error.response.status === 400) {
        alert('로그인 후 접근 가능합니다.');
        navigate(ROUTER_LINK.LANDING.path);
      }
    }
  };

  // useEffect(() => {
  //   if (!guestRoute.includes(location.pathname)) {
  //     fetchUserInfo();
  //   }
  // }, [location.pathname]);

  return (
    <Container>
      <Outlet />
      {routerNav.includes(`/${splitPathName[1]}`) ? <NavBar /> : <></>}
    </Container>
  );
};

export default RootContainer;

const Container = styled.div`
  height: calc(100% - 100px);
`;
