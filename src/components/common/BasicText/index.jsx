import React from 'react';
import * as S from './style';

const BasicText = ({
  text,
  size = '100%',
  color = '#000000',
  bold = 'normal',
  background = 'transparent',
  radius = '1rem',
  padding = 'auto',
  font = '',
}) => {
  return (
    <S.Text
      size={size}
      color={color}
      $bold={bold}
      $background={background}
      radius={radius}
      padding={padding}
      font={font}
    >
      {text}
    </S.Text>
  );
};

export default BasicText;
