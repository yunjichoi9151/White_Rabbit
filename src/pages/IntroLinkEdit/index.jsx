import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import Header from '../../components/common/Header';

function LinkEdit() {
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
    <div style={{ paddingTop: 64 }}>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        typeRight={'TEXT'}
        textCenter={'링크'}
        textRight={'등록'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
        }}
      />

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
    </div>
  );
}

export default LinkEdit;
