import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <S.LandingWrap>
      <div>Landing</div>
      <Link to="/home">홈으로 이동</Link>
    </S.LandingWrap>
  );
};

export default Landing;
