import * as S from './style';
import React from 'react';

const BasicInput = ({
  id,
  type,
  value,
  handleOnChangeValue,
  placeholder = '',
  isReadOnly = false,
}) => {
  return (
    <S.Input
      id={id}
      type={type}
      value={value}
      onChange={handleOnChangeValue}
      placeholder={placeholder}
      readOnly={isReadOnly}
    />
  );
};

export default BasicInput;
