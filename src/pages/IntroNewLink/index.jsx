import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { userApi } from '../../../api/utils/user';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import Header from '../../components/common/Header';

function NewLink() {
  const { userId } = useParams();
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

  /////// { API } /////////
  const handleNewLink = async () => {
    try {
      const { inputLinkValue, inputTitleValue } = form;

      const res = await userApi.links(userId, inputTitleValue, inputLinkValue);

      if (res.status === 200) {
        navigate('/mypage');
      }
    } catch (error) {
      alert('error: ' + error.response.data.message);
      console.log('error: ', error.response.data.message);
    }
  };

  /////////////////

  return (
    <S.IntroNewLinkWrapper>
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
        rightOnClickEvent={handleNewLink}
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
    </S.IntroNewLinkWrapper>
  );
}

export default NewLink;
