import React from 'react';
import * as S from './style';
import NavBar from '../../components/common/NavBar';
import SelectBar from '../../components/common/SelectBar';

const Home = () => {
  return (
    <S.HomeWrap>
      <div>home</div>
      <SelectBar style={{ width: '50px' }} />
      <NavBar />
    </S.HomeWrap>
  );
};

export default Home;
