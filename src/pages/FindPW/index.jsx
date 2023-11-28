import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import BasicButton from '../../components/common/BasicButton';
import BasicText from '../../components/common/BasicText';
import { useNavigate } from 'react-router';
import Header from '../../components/common/Header';
import { userApi } from '../../../api/utils/user';

function FindPW() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
    code: '',
  });

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClickSendEmail = async () => {
    const response = await userApi.sendEmail({
      email: form.email,
      name: form.name,
    });

    if (response.status === 200) {
      alert(response.data.message);
    }
  };

  // const handleClickConfirmCode = async () => {
  //   const response = await userApi.confirmCode({
  //     email: form.email,
  //     code: form.code,
  //   });
  //   console.log('response', response);
  // };
  const [isVisible, setIsVisible] = useState(false);

  const handleClickConfirmCode = () => {
    setIsVisible(true);
  };

  const handleClickResetPw = async () => {
    const response = await userApi.resetPassword({
      email: form.email,
      code: form.code,
      password: form.password,
    });
    console.log('response', response);
  };

  return (
    <>
      <S.Container>
        <Header
          typeLeft={'BACK'}
          typeCenter={'TEXT'}
          textCenter={'비밀번호 찾기'}
          headerStyle={{
            borderBottom: `1px solid ${CS.color.contentTertiary}`,
            background: CS.color.white,
          }}
          leftOnClickEvent={() => navigate(-1)}
        />
        {/* <BasicText
          text="비밀번호 찾기"
          style={{ font: CS.font.headingXL, marginLeft: 20, marginBottom: 16 }}
        /> */}
        <InputBox
          label="이름"
          subTextProps={{
            type: 'show',
            text: `${form['name'].length}/20`,
          }}
          inputProps={{
            value: form['name'],
            onChange: onChange,
            placeholder: '프로필 이름',
            name: 'name',
            maxLength: 20,
          }}
          buttonElement={false}
        />
        <InputBox
          label="가입 이메일"
          subTextProps={{
            type: 'none',
          }}
          inputProps={{
            value: form['email'],
            onChange: onChange,
            placeholder: 'example@elice.com',
            name: 'email',
          }}
          buttonElement={false}
        />
        <S.ButtonWrap>
          <BasicButton
            handleOnClickButton={handleClickSendEmail}
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
            value: form['code'],
            onChange: onChange,
            placeholder: '6자리 코드',
            name: 'code',
          }}
          buttonElement={true}
          onClickButton={handleClickConfirmCode}
        />
        {isVisible && (
          <>
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
                value: form['password'],
                onChange: onChange,
                placeholder: '영문, 숫자, 특수문자 포함 8자 이상',
                name: 'password',
              }}
              buttonElement={false}
            />
            <InputBox
              label="새 비밀번호 확인"
              subTextProps={{
                type: 'none',
              }}
              inputProps={{
                value: form['passwordCheck'],
                onChange: onChange,
                placeholder: '영문, 숫자, 특수문자 포함 8자 이상',
                name: 'passwordCheck',
              }}
              buttonElement={false}
            />

            <S.ButtonWrap>
              <BasicButton
                handleOnClickButton={handleClickResetPw}
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
        )}
      </S.Container>
    </>
  );
}

export default FindPW;
