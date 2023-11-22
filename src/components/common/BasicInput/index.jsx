import React from 'react';
import * as S from './style';

const BasicInput = ({
  id,
  type,
  value,
  onChange,
  onKeyDown,
  placeholder = '',
  isReadOnly = false,
  style,
  name,
}) => {
  return (
    <S.Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      readOnly={isReadOnly}
      style={style}
      name={name}
    />
  );
};

export default BasicInput;
