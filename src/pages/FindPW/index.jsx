import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import BasicButton from '../../components/common/BasicButton';
import BasicText from '../../components/common/BasicText';
import { useNavigate } from 'react-router';
import Header from '../../components/common/Header';
import { userApi } from '../../../api/utils/user';
import { ROUTER_LINK } from '../../router/routes';

const initialForm = {
  name: '',
  email: '',
  password: '',
  passwordCheck: '',
  code: '',
};

function FindPW() {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClickSendEmail = async () => {
    try {
      const response = await userApi.sendEmail({
        email: form.email,
        name: form.name,
      });

      if (response.status === 200) {
        alert('인증메일이 전송되었습니다.');
        setTimer(600);
        setIsVisible(false);
        setForm({
          ...form,
          password: '',
          passwordCheck: '',
          code: '',
        });
      }
    } catch (error) {
      if (error.response.data.message === '"name" is not allowed to be empty') {
        console.log(error);
        alert('이름을 입력해주세요.');
      }
      if (
        error.response.data.message === '"email" is not allowed to be empty'
      ) {
        console.log(error);
        alert('이메일을 입력해주세요.');
      }
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleClickConfirmCode = async () => {
    try {
      const response = await userApi.confirmCode({
        email: form.email,
        code: form.code,
      });

      if (response.status === 200) {
        alert('인증이 완료 되었습니다.');
        setIsVisible(true);
      }
    } catch (error) {
      alert('인증 번호를 다시 확인해주세요.');
    }
  };

  const handleClickResetPw = async () => {
    const response = await userApi.resetPassword({
      email: form.email,
      code: form.code,
      password: form.password,
    });
    if (response.status === 200) {
      alert('비밀번호가 변경 되었습니다.');
      navigate(ROUTER_LINK.LANDING.link);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
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
        <S.InputWrapper>
          <InputBox
            label="인증 번호"
            subTextProps={{
              type: 'show',
              text: '수신함에 인증 메일이 없다면 스팸 메일함을 확인해주세요.',
            }}
            inputProps={{
              value: form['code'],
              onChange: onChange,
              placeholder: '6자리 코드',
              name: 'code',
              style: {
                marginRight: 8,
              },
            }}
            buttonElement={true}
            text="인증"
            onClickButton={handleClickConfirmCode}
          />
          {timer && !isVisible ? (
            <span>{formatTime(Number(timer))}</span>
          ) : (
            <></>
          )}
        </S.InputWrapper>
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
                type: 'password',
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
                type: 'password',
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
