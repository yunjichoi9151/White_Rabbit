import React from 'react';
import * as CS from '../../styles/CommonStyles';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar';
import { ROUTER_LINK } from '../../router/routes';

const RootContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const routerHead = {
    [ROUTER_LINK.MYPAGE.link]: {
      text: '내 프로필',
      existText: true,
      headerStyle: {
        borderBottom: `1px solid ${CS.color.contentTertiary}`,
        background: CS.color.white,
      },
    },
    [ROUTER_LINK.NEWLINK.link]: {
      text: '링크',
      existText: true,
      existLeft: true,
      existRight: true,
      BtnText: '등록',
      headerStyle: {
        borderBottom: `1px solid ${CS.color.contentTertiary}`,
        background: CS.color.white,
      },
    },
    [ROUTER_LINK.PROFILEEDIT.link]: {
      text: '프로필 편집',
      existText: true,
      existLeft: true,
      existRight: true,
      BtnText: '완료',
      headerStyle: {
        borderBottom: `1px solid ${CS.color.contentTertiary}`,
        borderRadius: 0,
        background: CS.color.white,
      },
    },
    [ROUTER_LINK.NEWSKILL.link]: {
      text: '스킬',
      existText: true,
      existLeft: true,
      existRight: true,
      BtnText: '등록',
      headerStyle: {
        borderBottom: `1px solid ${CS.color.contentTertiary}`,
        background: CS.color.white,
      },
    },
    [ROUTER_LINK.JOIN.link]: {
      text: '회원가입',
      existText: true,
      existLeft: true,
      BtnText: '등록',
      headerStyle: {
        borderBottom: `1px solid ${CS.color.contentTertiary}`,
        background: CS.color.white,
      },
    },
    [ROUTER_LINK.HOME.link]: {
      existLeft: true,
      existSearch: true,
      headerStyle: {
        background: CS.color.white,
      },
    },
    [ROUTER_LINK.DETAIL.link]: {
      text: '상세',
      existText: true,
      existLeft: true,
      headerStyle: {
        borderBottom: `1px solid ${CS.color.contentTertiary}`,
        background: CS.color.white,
      },
    },
    [ROUTER_LINK.WRITE.link]: {
      text: '게시물 작성',
      existText: true,
      existLeft: true,
      existRight: true,
      BtnText: '완료',
      headerStyle: {
        borderBottom: `1px solid ${CS.color.contentTertiary}`,
        background: CS.color.white,
      },
      leftOnClickEvent: { goBack },
      rightOnClickEvent: () => console.log('done'),
    },
  };

  const hasHeader = !!routerHead[location.pathname];

  const routerNav = [
    ROUTER_LINK.MYPAGE.link,
    ROUTER_LINK.HOME.link,
    ROUTER_LINK.DETAIL.link,
  ];

  return (
    <Container $hasHeader={hasHeader}>
      {routerHead[location.pathname] ? (
        <Header
          text={routerHead[location.pathname].text}
          existText={routerHead[location.pathname].existText}
          headerStyle={routerHead[location.pathname].headerStyle}
          existLeft={routerHead[location.pathname].existLeft}
          existRight={routerHead[location.pathname].existRight}
          existSearch={routerHead[location.pathname].existSearch}
          BtnText={routerHead[location.pathname].BtnText}
        />
      ) : (
        <></>
      )}

      {routerNav.includes(location.pathname) ? <NavBar /> : <></>}
      <Outlet />
    </Container>
  );
};

export default RootContainer;

const Container = styled.div`
  padding-top: ${({ $hasHeader }) => ($hasHeader ? '64px' : '0px')};
  height: calc(100% - 100px);
`;
