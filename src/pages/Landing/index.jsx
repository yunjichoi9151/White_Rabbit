import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import BasicButton from '../../components/common/BasicButton';

const Landing = ({ onClickButton }) => {
  const [form, setForm] = useState({
    inputIdValue: '',
    inputPwValue: '',
  });

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <S.Container>
        <S.LandingImg src="/assets/img/elice_rabbit.png" alt="logo image" />
        <S.LandingText>
          신입 개발자가 되고싶은
          <br />
          레이서들의 커뮤니티 Elice
        </S.LandingText>
        <S.LandingSubText>with elice</S.LandingSubText>
      </S.Container>
      <S.InputStyle>
        <InputBox
          label="아이디"
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
      </S.InputStyle>

      <S.InputStyle>
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
      </S.InputStyle>

      <S.ButtonWrap>
        <BasicButton
          onClick={onClickButton}
          text="로그인"
          textStyle={{
            color: CS.color.white,
            fontSize: 14,
            fontWeight: 600,
          }}
          btnStyle={{
            backgroundColor: CS.color.primary,
            width: '48%',
            height: 50,
            borderRadius: 15,
          }}
        />
        <Link
          to={ROUTER_LINK.JOIN.link}
          style={{
            backgroundColor: CS.color.primary,
            width: '48%',
            height: 50,
            borderRadius: 15,
          }}
        >
          <BasicButton
            text="회원가입"
            textStyle={{
              color: CS.color.white,
              fontSize: 14,
              fontWeight: 600,
            }}
          />
        </Link>
      </S.ButtonWrap>
      <Link to={ROUTER_LINK.FINDPW.link}>
        <S.PwStyle>비밀번호를 잊어버리셨나요?</S.PwStyle>
      </Link>
      {/* <Link to="/home">홈으로 이동</Link> */}
    </>
  );
};

export default Landing;
