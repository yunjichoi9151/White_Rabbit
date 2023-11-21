import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import BasicButton from '../../components/common/BasicButton';
import BasicText from '../../components/common/BasicText';

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
      <BasicText
        text="비밀번호 찾기"
        style={{ font: CS.font.headingXL, marginLeft: 20, marginBottom: 16 }}
      />
      <InputBox
        label="이름"
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
        label="가입 이메일"
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
            font: CS.font.labelMedium,
          }}
          btnStyle={{
            backgroundColor: CS.color.primary,
            width: '100%',

            height: 50,
            borderRadius: 15,
          }}
        />
      </S.ButtonWrap>
      <InputBox
        label="인증 번호"
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

      <BasicText
        text="비밀번호 재설정"
        style={{
          font: CS.font.headingLarge,
          marginLeft: 20,
          marginBottom: 16,
          marginTop: 20,
        }}
      />
      <InputBox
        label="새 비밀번호"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form.name,
          handleOnChangeValue: onChange,
          placeholder: '영문, 숫자, 특수문자 포함 8자 이상',
          name: 'inputNameValue',
        }}
        buttonElement={false}
      />
      <InputBox
        label="새 비밀번호 확인"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form.name,
          handleOnChangeValue: onChange,
          placeholder: '영문, 숫자, 특수문자 포함 8자 이상',
          name: 'inputIdValue',
        }}
        buttonElement={false}
      />

      <S.ButtonWrap>
        <BasicButton
          onClick={onClickButton}
          text="비밀번호 변경"
          textStyle={{
            color: CS.color.white,
            font: CS.font.labelMedium,
          }}
          btnStyle={{
            backgroundColor: CS.color.primary,
            width: '100%',

            height: 50,
            borderRadius: 15,
          }}
        />
      </S.ButtonWrap>
    </>
  );
}

export default FindPW;
