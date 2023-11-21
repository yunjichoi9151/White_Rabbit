import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicInput from '../BasicInput';
import BasicText from '../BasicText';
import BasicButton from '../BasicButton';

function InputBox({
  label,
  subTextProps,
  inputProps,
  buttonElement,
  onClickButton,
}) {
  return (
    <>
      <S.Container>
        <S.ContentWrap>
          <BasicText
            text={label}
            style={{ color: CS.color.black, fontWeight: 600 }}
          />
          <S.SignText />
          <BasicText
            {...subTextProps}
            style={
              subTextProps.type === 'none'
                ? { display: 'none' }
                : { color: CS.color.contentTertiary, fontSize: 12 }
            }
          />
        </S.ContentWrap>
        <S.InputWrap>
          <BasicInput
            {...inputProps}
            style={{
              width: 200,
              fontSize: 16,
              textAlign: 'left',
              outline: 'none',
              border: `1px solid ${CS.color.secondary}`,
              borderRadius: 10,
              marginBottom: 0,
              paddingBottom: 0,
              paddingLeft: 16,
              marginRight: 8,
            }}
          />
          {buttonElement ? (
            <BasicButton
              onClick={onClickButton}
              text="인증"
              textStyle={{
                color: CS.color.white,
                size: 12,
              }}
              btnStyle={{
                backgroundColor: CS.color.primary,
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
