import React from 'react';
import * as S from './style';

const BasicText = ({ text, style, ...rest }) => {
  return (
    <S.Text style={style} {...rest}>
      {text}
    </S.Text>
  );
};

export default BasicText;
