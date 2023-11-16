import * as S from './style';
import React from 'react';

const BasicImage = ({ src = '', size = '100%', radius = 1 }) => {
  return (
    <S.BasicImage
      src={src !== '' ? src : '/assets/img/elice_icon.png'}
      size={size}
      radius={radius}
    />
  );
};

export default BasicImage;
