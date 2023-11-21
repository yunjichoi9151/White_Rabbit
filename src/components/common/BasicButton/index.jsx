import React from 'react';
import * as S from './style';
import BasicText from '../BasicText';

const BasicButton = ({
  text = '',
  iconDirection = '',
  textStyle,
  btnStyle,
  handleOnClickButton,
  children,
  existIcon = false,
  existText = true,
}) => {
  return (
    <S.BasicButton onClick={handleOnClickButton} style={btnStyle}>
      {iconDirection === 'left' && (
        <>
          {children}
          <BasicText text={text} style={textStyle} />
        </>
      )}
      {iconDirection === 'right' && (
        <>
          <BasicText text={text} style={textStyle} />
          {children}
        </>
      )}
      {existIcon && iconDirection === '' ? children : <></>}
      {existText && iconDirection === '' ? (
        <BasicText text={text} style={textStyle} />
      ) : (
        <></>
      )}
    </S.BasicButton>
  );
};

export default BasicButton;
