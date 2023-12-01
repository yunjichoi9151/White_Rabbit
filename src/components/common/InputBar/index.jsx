import React, { forwardRef } from 'react';
import * as S from './style';
import BasicInput from '../BasicInput';

const InputBar = forwardRef(
  (
    {
      id,
      src,
      type,
      value,
      accept,
      handleOnChangeValue,
      handleOnKeyDownValue,
      placeholder = '',
      isReadOnly = false,
      inputStyle,
      inputBarStyle,
      children,
      existLeft = false,
      existRight = false,
      existClearBtn,
      btnOnClick,
    },
    ref,
  ) => {
    return (
      <S.InputBar style={inputBarStyle}>
        {existLeft && children}
        <BasicInput
          id={id}
          type={type}
          value={value}
          accept={accept}
          src={src}
          onChange={handleOnChangeValue}
          onKeyDown={handleOnKeyDownValue}
          placeholder={placeholder}
          readOnly={isReadOnly}
          style={inputStyle}
          existClearBtn={existClearBtn}
          btnOnClick={btnOnClick}
          ref={ref}
        />
        {existRight && children}
      </S.InputBar>
    );
  },
);

export default InputBar;
