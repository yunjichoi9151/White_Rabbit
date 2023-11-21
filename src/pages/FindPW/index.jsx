import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import BasicButton from '../../components/common/BasicButton';
function FindPW({ onClickButton }) {
  const [form, setForm] = useState({
    inputNameValue: '',
    inputIdValue: '',
    inputPwValue: '',
    inputPwCheckValue: '',
  });

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <S.Header></S.Header>
      <InputBox
        text="이름"
        subTextProps={{
          type: 'show',
          text: '0/20',
        }}
        inputProps={{
          value: form.name,
          handleOnChangeValue: onChange,
          placeholder: '프로필 이름',
          name: 'inputNameValue',
        }}
        buttonElement={false}
      />
      <InputBox
        text="가입 이메일"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form.name,
          handleOnChangeValue: onChange,
          placeholder: 'example@elice.com',
          name: 'inputIdValue',
        }}
        buttonElement={false}
      />
      <S.ButtonWrap>
        <BasicButton
          onClick={onClickButton}
          text="이메일로 인증 번호 보내기"
          textStyle={{
            color: CS.color.white,
            fontSize: 14,
            fontWeight: 600,
          }}
          btnStyle={{
            backgroundColor: CS.color.primary,

            height: 50,
            borderRadius: 15,
          }}
        />
      </S.ButtonWrap>
      <InputBox
        text="인증 번호"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form.name,
          handleOnChangeValue: onChange,
          placeholder: '6자리 숫자',
          name: 'inputPwValue',
        }}
        buttonElement={true}
      />
    </>
  );
}

export default FindPW;
