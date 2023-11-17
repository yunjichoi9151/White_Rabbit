import React from 'react';
import * as S from './style';

const BasicInput = ({
  id,
  type,
  value,
  handleOnChangeValue,
  placeholder = '',
  isReadOnly = false,
  style,
}) => {
  return (
    <S.Input
      id={id}
      type={type}
      value={value}
      onChange={handleOnChangeValue}
      placeholder={placeholder}
      readOnly={isReadOnly}
      style={style}
    />
  );
};

export default BasicInput;
