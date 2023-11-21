import React from 'react';
import * as CS from '../../styles/CommonStyles';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/common/Header';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar';
import { ROUTER_LINK } from '../../router/routes';

const RootContainer = () => {
  const location = useLocation();

  const routerNav = [
    ROUTER_LINK.MYPAGE.link,
    ROUTER_LINK.HOME.link,
    ROUTER_LINK.DETAIL.link,
  ];

  return (
    <Container>
      <Outlet />
      {routerNav.includes(location.pathname) ? <NavBar /> : <></>}
    </Container>
  );
};

export default RootContainer;

const Container = styled.div`
  height: calc(100% - 100px);
`;
