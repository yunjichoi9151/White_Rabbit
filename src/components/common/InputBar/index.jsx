import React from 'react';
import * as S from './style';
import BasicInput from '../BasicInput';

const InputBar = ({
  id,
  type,
  value,
  handleOnChangeValue,
  placeholder = '',
  isReadOnly = false,
  inputStyle,
  inputBarStyle,
  children,
  existLeft = false,
  existRight = false,
}) => {
  return (
    <S.InputBar style={inputBarStyle}>
      {existLeft && children}
      <BasicInput
        id={id}
        type={type}
        value={value}
        onChange={handleOnChangeValue}
        placeholder={placeholder}
        readOnly={isReadOnly}
        style={inputStyle}
      />
      {existRight && children}
    </S.InputBar>
  );
};

export default InputBar;
