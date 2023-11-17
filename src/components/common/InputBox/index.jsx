import React from 'react';
import BasicText from '../BasicText';
import SubText from './SubText';
import styled from 'styled-components';
import BasicInput from '../BasicInput';
import BasicButton from '../BasicButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28px;
  margin-right: 28px;
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
  textProps,
  subTextProps,
  inputProps,
  buttonElement,
  onClickButton,
}) {
  const { text, color } = textProps;
  const { subText, subColor } = subTextProps;
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
          <BasicText text={text} color={color} />
          <SignText />
          <SubText subText={subText} subColor={subColor} />
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
              outline: 'none',
              border: '1px solid var(--color-secondary)',
              borderRadius: 10,
              marginRight: 8,
            }}
          />
          {buttonElement ? (
            <BasicButton
              onClick={onClickButton}
              text="인증"
              style={{
                fontColor: 'var(--color-white)',
                fontSize: 16,
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
