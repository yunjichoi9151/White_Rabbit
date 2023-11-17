import React from 'react';
import * as S from './style';

const BasicText = ({ text, style }) => {
  return <S.Text style={style}>{text}</S.Text>;
};

export default BasicText;
