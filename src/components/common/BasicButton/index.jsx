import BasicText from '../BasicText';
import * as S from './style';
import React from 'react';

const BasicButton = ({
  text = '',
  size = '100%',
  font = '',
  fontColor = '',
  border = 'none',
  way = 'row',
  iconDirection = '',
  backgroundColor = 'transparent',
  isDisabled = false,
  handleOnClickButton,
  size = '100%',
  iconChildren,
  existIcon = false,
  existText = false,
  radius = 1,
}) => {
  return (
    <S.BasicButton
      color={backgroundColor}
      size={size}
      border={border}
      $way={way}
      $iconDirection={iconDirection}
      isDisabled={isDisabled}
      radius={radius}
      onClick={handleOnClickButton}
    >
      {iconDirection === 'left' && (
        <>
          {iconChildren}
          <BasicText text={text} size={size} font={font} color={fontColor} />
        </>
      )}
      {iconDirection === 'right' && (
        <>
          <BasicText text={text} size={size} font={font} color={fontColor} />
          {iconChildren}
        </>
      )}
      {existIcon ? { iconChildren } : <></>}
      {existText ? (
        <BasicText text={text} size={size} font={font} color={fontColor} />
      ) : (
        <></>
      )}
    </S.BasicButton>
  );
};

export default BasicButton;
