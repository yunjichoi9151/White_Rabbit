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
  signType,
  text,
}) {
  return (
    <>
      <S.Container>
        <S.ContentWrap>
          <BasicText
            text={label}
            style={{
              color: CS.color.black,
              fontWeight: 600,
              font: CS.font.labelMedium,
              height: '56px',
            }}
          />
          <S.SignText $signType={signType} />
          <BasicText
            {...subTextProps}
            style={
              subTextProps.type === 'none'
                ? { display: 'none' }
                : { color: CS.color.contentTertiary, font: CS.font.labelSmall }
            }
          />
        </S.ContentWrap>
        <S.InputWrap>
          <BasicInput
            {...inputProps}
            style={{
              width: 200,
              height: 50,
              font: CS.font.labelMedium,
              textAlign: 'left',
              outline: 'none',
              border: `1px solid ${CS.color.secondary}`,
              borderRadius: 10,
              marginBottom: 0,
              paddingBottom: 0,
              paddingLeft: 16,
              ...inputProps.style,
            }}
          />
          {buttonElement ? (
            <BasicButton
              handleOnClickButton={onClickButton}
              text={text}
              textStyle={{
                color: CS.color.white,
                font: CS.font.labelMedium,
              }}
              btnStyle={{
                backgroundColor: CS.color.primary,
                width: 92,
                height: 50,
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
