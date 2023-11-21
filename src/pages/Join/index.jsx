import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import SelectBar from '../../components/common/SelectBar';
import BasicText from '../../components/common/BasicText';
import CheckBox from '../../components/common/CheckBox';
import BasicButton from '../../components/common/BasicButton';

function Join({ onClickButton }) {
  const [checked, setChecked] = useState(false);

  const handleChangeCheckBox = (e) => {
    setChecked(e.target.checked);
  };

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

  const [selected, setSelected] = useState('');

  const handleChangeSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <>
      <S.Header></S.Header>
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
        label="이메일"
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
      <InputBox
        label="비밀번호"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form.name,
          handleOnChangeValue: onChange,
          placeholder: '영문, 숫자, 특수문자 포함 8자 이상',
          name: 'inputPwValue',
        }}
        buttonElement={false}
      />
      <InputBox
        label="비밀번호 확인"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form.name,
          handleOnChangeValue: onChange,
          placeholder: '영문, 숫자, 특수문자 포함 8자 이상',
          name: 'inputPwCheckValue',
        }}
        buttonElement={false}
      />

      <S.SelectContainer>
        <S.TextWrap>
          <BasicText
            text="기수"
            style={{
              color: CS.color.black,
              fontWeight: 600,
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <S.SignText />
        </S.TextWrap>
        <S.SelectBarWrap>
          <SelectBar
            style={{
              display: 'flex',
              flex: 2,
              height: '2.75rem',
              fontSize: 16,
              textAlign: 'left',
              outline: 'none',
              border: `1px solid ${CS.color.secondary}`,
              borderRadius: 10,
              marginBottom: 0,
              paddingBottom: 0,
              paddingLeft: 16,
            }}
          />
          <SelectBar
            style={{
              display: 'flex',
              flex: 1,
              height: '2.75rem',
              fontSize: 16,
              textAlign: 'left',
              outline: 'none',
              border: `1px solid ${CS.color.secondary}`,
              borderRadius: 10,
              marginBottom: 0,
              paddingBottom: 0,
              paddingLeft: 16,
            }}
            options={[
              { key: 'apple', value: 'apple', name: '사과' },
              { key: 'banana', value: 'banana', name: '바나나' },
              { key: 'orange', value: 'orange', name: '오렌지' },
            ]}
            onChange={handleChangeSelect}
          />
        </S.SelectBarWrap>
      </S.SelectContainer>
      <S.SelectContainer>
        <S.TextWrap>
          <BasicText
            text="등급"
            style={{
              color: CS.color.black,
              fontWeight: 600,
              marginTop: 16,
              marginBottom: 16,
            }}
            options={[
              { key: 'apple', value: 'apple', name: '사과' },
              { key: 'banana', value: 'banana', name: '바나나' },
              { key: 'orange', value: 'orange', name: '오렌지' },
            ]}
          />
          <S.SignText />
        </S.TextWrap>

        <SelectBar
          style={{
            display: 'flex',
            flex: 2,
            height: '2.75rem',
            fontSize: 16,
            textAlign: 'left',
            outline: 'none',
            border: `1px solid ${CS.color.secondary}`,
            borderRadius: 10,
            marginBottom: 0,
            paddingBottom: 0,
            paddingLeft: 16,
          }}
          options={[
            { key: 'apple', value: 'apple', name: '사과' },
            { key: 'banana', value: 'banana', name: '바나나' },
            { key: 'orange', value: 'orange', name: '오렌지' },
          ]}
        />
      </S.SelectContainer>
      <S.CheckBoxWrap>
        <CheckBox
          checked={checked}
          onChange={handleChangeCheckBox}
          text="모두 동의"
        />
        <CheckBox
          checked={checked}
          onChange={handleChangeCheckBox}
          text="(필수) 만 14세 이상 입니다."
        />
        <CheckBox
          checked={checked}
          onChange={handleChangeCheckBox}
          text="(필수) 이용 약관 동의"
        />
        <CheckBox
          checked={checked}
          onChange={handleChangeCheckBox}
          text="(필수) 개인정보 수집 · 이용 동의"
        />
        <CheckBox
          checked={checked}
          onChange={handleChangeCheckBox}
          text="(선택) 마케팅 정보 수신 동의"
        />
      </S.CheckBoxWrap>
      <S.ButtonWrap>
        <Link
          to={ROUTER_LINK.LANDING.link}
          style={{
            backgroundColor: CS.color.primary,

            height: 50,
            borderRadius: 15,
            flex: 1,
          }}
        >
          <BasicButton
            onClick={onClickButton}
            text="회원가입"
            textStyle={{
              color: CS.color.white,
              fontSize: 14,
              fontWeight: 600,
            }}
            btnStyle={{}}
          />
        </Link>
      </S.ButtonWrap>
    </>
  );
}

export default Join;
