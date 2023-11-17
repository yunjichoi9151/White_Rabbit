import React from 'react';
import BasicText from '../BasicText';

import styled from 'styled-components';
import BasicInput from '../BasicInput';
import BasicButton from '../BasicButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;
const ContentWrap = styled.div`
  display: flex;

  align-items: center;
`;

const InputWrap = styled.div`
  display: flex;

  input {
    flex: 1;
  }
`;

const SignText = styled.p`
  &::before {
    content: '*';
    color: #ff7171;
  }
  margin-right: 5px;
`;

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
      <Container>
        <ContentWrap>
          <BasicText
            text={text}
            style={{ color: 'var(--color-black)', fontWeight: 600 }}
          />
          <SignText />
          <BasicText
            text={subText}
            style={
              type === 'none'
                ? { display: 'none' }
                : { color: 'var(--color-content-tertiary)', fontSize: 12 }
            }
          />
        </ContentWrap>
        <InputWrap>
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
        </InputWrap>
      </Container>
    </>
  );
}

export default InputBox;
