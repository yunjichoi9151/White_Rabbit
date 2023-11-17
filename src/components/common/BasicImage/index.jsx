import React from 'react';
import * as S from './style';

const BasicImage = ({ src = '', style }) => {
  return (
    <S.BasicImage
      src={src !== '' ? src : '/assets/img/elice_icon.png'}
      style={style}
    />
  );
};

export default BasicImage;
