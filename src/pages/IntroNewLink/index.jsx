import React, { useState } from 'react';
import * as S from './style';
import InputBox from '../../components/common/InputBox';

function NewLink() {
  const [form, setForm] = useState({
    inputLinkValue: '',
    inputTitleValue: '',
  });

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <InputBox
        label="링크 연결"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form['inputLinkValue'],
          handleOnChangeValue: onChange,
          placeholder: 'https://',
          name: 'inputLinkValue',
        }}
        buttonElement={false}
      />

      <InputBox
        label="제목"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form['inputTitleValue'],
          handleOnChangeValue: onChange,
          placeholder: '',
          name: 'inputTitleValue',
        }}
        buttonElement={false}
      />
    </>
  );
}

export default NewLink;
