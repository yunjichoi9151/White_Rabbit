import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import { TailSpin } from 'react-loader-spinner';

const Loading = ({ style }) => {
  return (
    <S.Loading style={style}>
      <TailSpin
        height="80"
        width="80"
        color={CS.color.positive}
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </S.Loading>
  );
};

export default Loading;
