import React, { useState } from 'react';
import InputBox from '../../components/common/InputBox';
import styled from 'styled-components';

const Header = styled.div`
  width: 393px;
  height: 46px;
`;

function Link_Edit() {
  const [inputLinkValue, setInputLinkValue] = useState('');
  const [inputTitleValue, setInputTitleValue] = useState('');

  const handleOnChangeLinkValue = (e) => {
    setInputLinkValue(e.target.value);
  };
  const handleOnChangeTitleValue = (e) => {
    setInputTitleValue(e.target.value);
  };

  return (
    <>
      <Header></Header>

      <InputBox
        text="링크 연결"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: inputLinkValue,
          handleOnChangeValue: handleOnChangeLinkValue,
          placeholder: 'https://', //기존 링크
        }}
        buttonElement={false}
      />

      <InputBox
        text="제목"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: inputTitleValue,
          handleOnChangeValue: handleOnChangeTitleValue,
          placeholder: '', //기존 제목
        }}
        buttonElement={false}
      />
    </>
  );
}

export default Link_Edit;
