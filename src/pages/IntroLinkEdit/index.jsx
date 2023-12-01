import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { userApi } from '../../../api/utils/user';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import Header from '../../components/common/Header';

function LinkEdit() {
  const location = useLocation();

  const { state } = location;
  const { userId } = useParams();

  const [form, setForm] = useState({
    id: state.linkId,
    inputLinkValue: state.url,
    inputTitleValue: state.title,
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClickEdit = async () => {
    const res = await userApi.editLinks(form, userId);
    if (res.status === 200) {
      navigate(ROUTER_LINK.MYPAGE.link);
    }
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
        rightOnClickEvent={handleClickEdit}
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
