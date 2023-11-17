import React from 'react';
import BasicText from '../BasicText';
import * as S from './style';
import BasicInput from '../BasicInput';
import BasicButton from '../BasicButton';

function InputBox({
  text,
  subTextProps,
  inputProps,
  buttonElement,
  onClickButton,
}) {
  const { text: subText, style: subStyle, type } = subTextProps;
  const {
    value,
    handleOnChangeValue,
    placeholder,
    isReadOnly = false,
    id = undefined,
  } = inputProps;
  return (
    <>
      <S.Container>
        <S.ContentWrap>
          <BasicText
            text={text}
            style={{ color: 'var(--color-black)', fontWeight: 600 }}
          />
          <S.SignText />
          <BasicText
            text={subText}
            style={
              type === 'none'
                ? { display: 'none' }
                : { color: 'var(--color-content-tertiary)', fontSize: 12 }
            }
          />
        </S.ContentWrap>
        <S.InputWrap>
          <BasicInput
            id={id ? id : undefined}
            value={value}
            handleOnChangeValue={handleOnChangeValue}
            placeholder={placeholder}
            isReadOnly={isReadOnly}
            style={{
              width: 200,
              fontSize: 16,
              textAlign: 'left',
              outline: 'none',
              border: '1px solid var(--color-secondary)',
              borderRadius: 10,
              marginRight: 8,
              marginBottom: 0,
              paddingBottom: 0,
              paddingLeft: 16,
            }}
          />
          {buttonElement ? (
            <BasicButton
              onClick={onClickButton}
              text="인증"
              textStyle={{
                color: 'var(--color-white)',
                size: 16,
              }}
              btnStyle={{
                backgroundColor: 'var(--color-primary)',
                width: 92,
                height: 42,
                borderRadius: 10,
              }}
            />
          ) : (
            <></>
          )}
        </S.InputWrap>
      </S.Container>
    </>
  );
}

export default InputBox;
