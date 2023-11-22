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
import Header from '../../components/common/Header';

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
    <div style={{ paddingTop: 64 }}>
      <Header
        text={'회원가입'}
        existText={true}
        existLeft={true}
        BtnText={'등록'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
          background: CS.color.white,
        }}
      />
      <InputBox
        label="이름"
        subTextProps={{
          type: 'show',
          text: '0/20',
        }}
        inputProps={{
          value: form['inputNameValue'],
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
          value: form['inputIdValue'],
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
          value: form['inputPwValue'],
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
          value: form['inputPwCheckValue'],
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
              font: CS.font.labelMedium,
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
              height: 50,

              font: CS.font.labelMedium,
              textAlign: 'left',
              outline: 'none',
              border: `1px solid ${CS.color.secondary}`,
              borderRadius: 10,
              marginBottom: 0,
              marginRight: 4,
              paddingBottom: 0,
              paddingLeft: 16,
            }}
            options={[
              {
                key: 'trackChoice',
                value: '',
                name: '트랙 선택',
                style: { display: 'none' },
              },
              { key: 'SW', value: 'SW', name: 'SW 엔지니어 트랙' },
              { key: 'AI', value: 'AI', name: '웹 풀스택 X AI 트랙 ' },
              { key: 'Cloud', value: 'Cloud', name: 'Cloud 트랙 ' },
              { key: 'IoT', value: 'IoT', name: 'IoT 트랙 ' },
            ]}
            onChange={handleChangeSelect}
          />
          <SelectBar
            style={{
              display: 'flex',
              flex: 1,
              height: 50,
              font: CS.font.labelMedium,
              textAlign: 'left',
              outline: 'none',
              border: `1px solid ${CS.color.secondary}`,
              borderRadius: 10,
              marginBottom: 0,
              paddingBottom: 0,
              paddingLeft: 16,
            }}
            options={[
              {
                key: 'stageChoice',
                value: '',
                name: '기수 선택',
                style: { display: 'none' },
              },
              { key: '1', value: '1', name: '1기' },
              { key: '2', value: '2', name: '2기' },
              { key: '3', value: '3', name: '3기' },
              { key: '4', value: '4', name: '4기' },
              { key: '5', value: '5', name: '5기' },
              { key: '6', value: '6', name: '6기' },
              { key: '7', value: '7', name: '7기' },
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
              font: CS.font.labelMedium,
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <S.SignText />
        </S.TextWrap>

        <SelectBar
          style={{
            display: 'flex',
            flex: 1,
            height: 50,
            font: CS.font.labelMedium,
            textAlign: 'left',
            outline: 'none',
            border: `1px solid ${CS.color.secondary}`,
            borderRadius: 10,
            marginBottom: 0,
            paddingBottom: 0,
            paddingLeft: 16,
          }}
          options={[
            {
              key: 'ratingChoice',
              value: '',
              name: '등급 선택',
              style: { display: 'none' },
            },
            { key: 'racer', value: 'racer', name: '레이서' },
            { key: 'coach', value: 'coach', name: '코치' },
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

            display: 'flex',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <BasicButton
            onClick={onClickButton}
            text="회원가입"
            textStyle={{
              color: CS.color.white,
              font: CS.font.labelMedium,
            }}
            btnStyle={{}}
          />
        </Link>
      </S.ButtonWrap>
    </div>
  );
}

export default Join;
