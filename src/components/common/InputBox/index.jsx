import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicInput from '../BasicInput';
import BasicText from '../BasicText';
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
    name,
  } = inputProps;
  return (
    <>
      <S.Container>
        <S.ContentWrap>
          <BasicText
            text={text}
            style={{ color: CS.color.black, fontWeight: 600 }}
          />
          <S.SignText />
          <BasicText
            text={subText}
            style={
              type === 'none'
                ? { display: 'none' }
                : { color: CS.color.contentTertiary, fontSize: 12 }
            }
          />
        </S.ContentWrap>
        <S.InputWrap>
          <BasicInput
            id={id ? id : undefined}
            value={value}
            name={name}
            onChange={handleOnChangeValue}
            placeholder={placeholder}
            isReadOnly={isReadOnly}
            style={{
              width: 200,
              fontSize: 16,
              textAlign: 'left',
              outline: 'none',
              border: `1px solid ${CS.color.secondary}`,
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
                color: CS.color.white,
                size: 16,
              }}
              btnStyle={{
                backgroundColor: CS.color.white,
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
