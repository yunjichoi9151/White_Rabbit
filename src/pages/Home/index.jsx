import React from 'react';
import * as S from './style';
import NavBar from '../../components/common/NavBar';
import SelectBar from '../../components/common/SelectBar';
import Header from '../../components/common/Header';

const Home = () => {
  return (
    <S.HomeWrap>
      {/* <Header existText={true} text="로그인" /> */}
      {/* <Header existText={true} existRight={true} text="개발자 Q&A" /> */}
      {/* <Header existText={true} existLeft={true} text="로그인" /> */}
      {/* <Header
        existText={true}
        existLeft={true}
        existRight={true}
        BtnText="완료"
        text="로그인"
      /> */}
      <Header existLeft={true} existSearch={true} />
      {/* <Header existSearch={true} /> */}
      {/* <div>home</div> */}
      <NavBar />
    </S.HomeWrap>
  );
};

export default Home;
