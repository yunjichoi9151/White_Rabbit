import React, { useState, useEffect } from 'react';
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

  const [isLoginChecked, setIsLoginChecked] = useState(false);

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

  const validateLogin = async () => {
    try {
      // 로그인 되어 있으면 게스트 페이지 접속 시 Home/Admin으로 이동
      const res = await userApi.getLoginUserInfo();
      if (guestRoute.includes(location.pathname)) {
        if (res.data.data.roles === 'ADMIN') {
          navigate(ROUTER_LINK.ADMIN.path);
        } else {
          navigate(ROUTER_LINK.HOME.path);
        }
      }
    } catch (error) {
      // 로그인 되어있지 않으면 사용자/관리자 페이지 접속 시 Landing으로 이동
      if (!guestRoute.includes(location.pathname)) {
        alert('로그인 후 접근 가능합니다.');
        navigate(ROUTER_LINK.LANDING.path);
      }
    } finally {
      // 로그인 체크 전 화면 렌더링 방지
      setIsLoginChecked(true);
    }
  };

  useEffect(() => {
    validateLogin();
  }, [location.pathname]);

  return (
    <Container>
      {isLoginChecked && (
        <>
          <Outlet />
          {routerNav.includes(`/${splitPathName[1]}`) ? <NavBar /> : <></>}
        </>
      )}
    </Container>
  );
};

export default RootContainer;

const Container = styled.div`
  height: calc(100% - 100px);
`;
