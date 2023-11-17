import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';

const Landing = () => {
  return (
    <S.LandingWrap>
      <div>Landing</div>
      <Link to={ROUTER_LINK.HOME.link}>홈으로 이동</Link>
    </S.LandingWrap>
  );
};

export default Landing;
