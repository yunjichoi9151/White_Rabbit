import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router';

function LinkEdit() {
  const [form, setForm] = useState({
    inputLinkValue: '',
    inputTitleValue: '',
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <S.LinkEditWrapper>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        typeRight={'TEXT'}
        textCenter={'링크'}
        textRight={'등록'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
        }}
        leftOnClickEvent={() => navigate(-1)}
      />

      <InputBox
        label="링크 연결"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form['inputLinkValue'],
          onChange: onChange,
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
          onChange: onChange,
          placeholder: '',
          name: 'inputTitleValue',
        }}
        buttonElement={false}
      />
    </S.LinkEditWrapper>
  );
}

export default LinkEdit;
