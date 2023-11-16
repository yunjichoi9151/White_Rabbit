import React from 'react';
import * as S from './style';

const BasicText = ({
  text,
  size = '100%',
  color = '#ffffff',
  background = 'transparent',
  clipText,
  font,
}) => {
  return (
    <S.Text
      size={size}
      color={color}
      background={background}
      clipText={clipText}
      font={font}
    >
      {text}
    </S.Text>
  );
};

export default BasicText;
