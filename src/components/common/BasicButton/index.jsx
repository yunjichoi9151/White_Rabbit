import BasicText from '../BasicText';
import * as S from './style';
import React from 'react';

const BasicButton = ({
  text = '',
  fontSize = '16px',
  fontColor = 'var(--color-white)',
  font = '',
  border = 'none',
  way = 'row',
  iconDirection = '',
  backgroundColor = 'transparent',
  disabled = false,
  handleOnClickButton,
  iconChildren,
  existIcon = false,
  existText = true,
  radius = '1px',
  width = '100%',
  height = '57px',
}) => {
  return (
    <S.BasicButton
      color={backgroundColor}
      fontSize={fontSize}
      border={border}
      way={way}
      disabled={disabled}
      radius={radius}
      onClick={handleOnClickButton}
      width={width}
      height={height}
    >
      {iconDirection === 'left' && (
        <>
          {iconChildren}
          <BasicText
            text={text}
            size={fontSize}
            font={font}
            color={fontColor}
          />
        </>
      )}
      {iconDirection === 'right' && (
        <>
          <BasicText
            text={text}
            size={fontSize}
            font={font}
            color={fontColor}
          />
          {iconChildren}
        </>
      )}
      {existIcon ? { iconChildren } : <></>}
      {existText ? (
        <BasicText text={text} size={fontSize} font={font} color={fontColor} />
      ) : (
        <></>
      )}
    </S.BasicButton>
  );
};

export default BasicButton;
