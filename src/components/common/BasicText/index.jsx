import * as S from './style';
import React from 'react';

const BasicText = ({ text, style }) => {
  return <S.Text style={style}>{text}</S.Text>;
};

export default BasicText;
