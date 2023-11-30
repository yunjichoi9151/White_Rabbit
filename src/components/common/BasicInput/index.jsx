import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicButton from '../BasicButton';
import { RiDeleteBack2Fill } from 'react-icons/ri';

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
  existClearBtn = false,
  btnOnClick,
  style,
  name,
  ...rest
}) => {
  return (
    <>
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
      <BasicButton
        handleOnClickButton={btnOnClick}
        existIcon={true}
        btnStyle={{
          width: '2rem',
          display: existClearBtn ? 'block' : 'none',
        }}
      >
        <RiDeleteBack2Fill color={CS.color.black} size="1.5rem" />
      </BasicButton>
    </>
  );
};

export default BasicInput;
