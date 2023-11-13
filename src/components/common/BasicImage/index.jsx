import * as S from './style';
import React from 'react';

const BasicImage = ({ src, size = '100%', radius = 1 }) => {
  return (
    <>
      {src.startsWith('images/') ? (
        <S.BasicImage
          src={process.env.CLOUDFRONT_URL + src}
          size={size}
          radius={radius}
        />
      ) : (
        <S.BasicImage
          src={src !== '' ? src : '/icons/favicon-512x512.png'}
          size={size}
          radius={radius}
        />
      )}
    </>
  );
};

export default BasicImage;
