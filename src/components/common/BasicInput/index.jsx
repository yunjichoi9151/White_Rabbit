import React from 'react';
import * as S from './style';

const BasicInput = ({
  id,
  src,
  type,
  value,
  accept,
  onChange,
  onKeyDown,
  placeholder = '',
  isReadOnly = false,
  style,
  name,
  ...rest
}) => {
  return (
    <S.Input
      id={id}
      src={src}
      type={type}
      value={value}
      accept={accept}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      readOnly={isReadOnly}
      style={style}
      name={name}
      {...rest}
    />
  );
};

export default BasicInput;
