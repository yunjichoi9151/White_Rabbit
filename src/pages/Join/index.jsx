import React, { useCallback, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import { userApi } from '../../../api/utils/user';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import SelectBar from '../../components/common/SelectBar';
import BasicText from '../../components/common/BasicText';
import CheckBox from '../../components/common/CheckBox';
import BasicButton from '../../components/common/BasicButton';
import Header from '../../components/common/Header';

function Join() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleChangeCheckBox = (e) => {
    setChecked(e.target.checked);
  };

  // const onChange = (e) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // {유효성 검사} //

  const validateName = (name) => {
    return name.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,20}$/);
  };

  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      );
  };

  const validatePwd = (password) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
  };

  //

  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPwd: '',
  // });

  const [name, setName] = useState('엘리스');
  const [email, setEmail] = useState('elice@naver.com');
  const [password, setPassword] = useState('qwer1234!');
  const [confirmPwd, setConfirmPwd] = useState('qwer1234!');

  // const focusRef = useRef(null);

  const isNameValid = validateName(name);
  const isEmailValid = validateEmail(email);
  const isPwdValid = validatePwd(password);
  const isConfirmPwd = password === confirmPwd;

  //이름
  const onChangeName = (e) => {
    const currName = e.target.value;
    setName(currName);
  };

  //이메일
  const onChangeEmail = (e) => {
    const currEmail = e.target.value;
    setEmail(currEmail);
  };

  //비밀번호
  const onChangePwd = (e) => {
    const currPwd = e.target.value;
    setPassword(currPwd);
  };

  //비밀번호 확인
  const onChangeConfirmPwd = (e) => {
    const currConfirmPwd = e.target.value;
    setConfirmPwd(currConfirmPwd);
  };

  // const isAllValid = isEmailValid;
  // isPwdValid &&
  // isConfirmPwd &&
  // isNameValid &&
  // isAccepted &&
  // checkMail &&
  // checkName;

  ///////////
  const [genType, setGenType] = useState('');
  const [genNum, setGenNum] = useState('');
  const [roles, setRoles] = useState('');

  const handleChangegenType = (e) => {
    setGenType(e.target.value);
  };

  const handleChangegenNum = (e) => {
    setGenNum(e.target.value);
  };

  const handleChangeroles = (e) => {
    setRoles(e.target.value);
  };

  const onClickButton = async (e) => {
    e.preventDefault();
    if (!isNameValid) {
      alert('1글자 이상 20글자 미만으로 입력해주세요.');
      return;
    } else if (!isEmailValid) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    } else if (!isPwdValid) {
      alert('영문, 숫자, 특수기호 포함 8자리 이상 입력해주세요.');
      return;
    } else if (!isConfirmPwd) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else if (!checked) {
      alert('(필수) 만 14세 이상 입니다.');
      return;
    } else if (genType === '') {
      alert('트랙을 선택해주세요.');
      return;
    } else if (genNum === '') {
      alert('기수를 선택해주세요.');
      return;
    } else if (roles === '') {
      alert('등급을 선택해주세요.');
      return;
    }

    /// {API} ///
    try {
      const res = await userApi.signUp({
        name,
        email,
        password,
        generation_type: genType,
        generation_number: Number(genNum),
      });
      if (res.status === 201) {
        console.log(res.data);

        navigate(ROUTER_LINK.LANDING.link);
      }
    } catch (error) {
      console.error('등록 중 오류 발생:', error);

      if (error.response && error.response.status === 409) {
        // Handle conflict (email already exists) here
        alert('이미 등록된 이메일 주소입니다.');
      } else {
        // Handle other errors
        alert('등록 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        textCenter={'회원가입'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
          background: CS.color.white,
        }}
        leftOnClickEvent={() => navigate(-1)}
      />
      <S.Container>
        <InputBox
          label="이름"
          subTextProps={{
            type: 'show',
            text: `${name.length}/20`,
          }}
          inputProps={{
            value: name,
            onChange: onChangeName,
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
            value: email,
            onChange: onChangeEmail,
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
            value: password,
            type: 'password',
            onChange: onChangePwd,
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
            value: confirmPwd,
            type: 'password',
            onChange: onChangeConfirmPwd,
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
              value={genType}
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
                {
                  key: 'SW',
                  value: 'SW 엔지니어 트랙',
                  name: 'SW 엔지니어 트랙',
                },
                {
                  key: 'AI',
                  value: '웹 풀스택 X AI 트랙',
                  name: '웹 풀스택 X AI 트랙',
                },
                { key: 'Cloud', value: 'Cloud 트랙', name: 'Cloud 트랙' },
                { key: 'IoT', value: 'IoT 트랙', name: 'IoT 트랙' },
              ]}
              onChange={handleChangegenType}
            />
            <SelectBar
              value={genNum}
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
              onChange={handleChangegenNum}
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
            value={roles}
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
            onChange={handleChangeroles}
          />
        </S.SelectContainer>
        <S.CheckBoxWrap>
          <CheckBox
            checked={checked}
            onChange={handleChangeCheckBox}
            text="(필수) 만 14세 이상 입니다."
          />
        </S.CheckBoxWrap>
        <S.ButtonWrap>
          <BasicButton
            handleOnClickButton={onClickButton}
            text="회원가입"
            textStyle={{
              color: CS.color.white,
              font: CS.font.labelMedium,
            }}
            btnStyle={{
              backgroundColor: CS.color.primary,
              height: 50,
              borderRadius: 15,
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </S.ButtonWrap>
      </S.Container>
    </>
  );
}

export default Join;
