import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import Header from '../../components/common/Header';

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
    <div style={{ paddingTop: 64 }}>
      <Header
        text={'링크'}
        existText={true}
        existLeft={true}
        existRight={true}
        BtnText={'등록'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
          background: CS.color.white,
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

export default NewLink;
