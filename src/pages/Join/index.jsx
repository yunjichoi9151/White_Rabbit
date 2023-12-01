import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const [isDuplicateCheck, setIsDuplicateCheck] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

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

  ///////////
  const [genType, setGenType] = useState('');
  const [genNum, setGenNum] = useState('');
  const [roles, setRoles] = useState('');
  const [generationType, setGenerationType] = useState([]);
  const [generationNum, setGenerationNum] = useState([]);

  const handleChangegenType = (value) => {
    setGenType(value);
  };

  const handleChangegenNum = (value) => {
    setGenNum(value);
  };

  const handleChangeroles = (value) => {
    setRoles(value);
  };
  /// {트랙 기수 API} ///

  const getSomething = async () => {
    const response = await userApi.generation();

    const types = response.data.data.map((gen) => gen.type);

    const set = new Set(types);

    const uniqueArr = [...set];

    const optionGenType = uniqueArr.map((type) => {
      return {
        key: type,
        value: type,
        name: type,
      };
    });

    setGenerationType(optionGenType);

    const optionGenNum = response.data.data.map((gen) => {
      return {
        key: gen.number,
        value: gen.number,
        name: gen.number + '기',
      };
    });
    setGenerationNum(optionGenNum);
  };

  useEffect(() => {
    getSomething();
  }, []);

  const onClickButton = async () => {
    if (!isNameValid) {
      alert('이름을 1글자 이상 20글자 미만으로 입력해주세요.');
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
    } else if (genType === '') {
      alert('트랙을 선택해주세요.');
      return;
    } else if (genNum === '') {
      alert('기수를 선택해주세요.');
      return;
    } else if (roles === '') {
      alert('등급을 선택해주세요.');
      return;
    } else if (!checked) {
      alert('(필수) 만 14세 이상 입니다.');
      return;
    } else if (!isDuplicateCheck) {
      alert('중복확인이 필요합니다.');
      return;
    }

    /// {API} ///

    const res = await userApi.signUp({
      name,
      email,
      password,
      generation_type: genType,
      generation_number: Number(genNum),
      roles,
    });

    if (res.status === 201) {
      alert('회원가입 완료!');
      navigate(ROUTER_LINK.LANDING.link);
    }
  };

  // 중복 확인 버튼
  const handleClickDuplicateCheck = async () => {
    const response = await userApi.duplicateCheck({
      email,
    });
    if (response.status === 200) {
      alert('이미 등록된 이메일 입니다.');
    }

    setIsDuplicateCheck(response.data.isAvailable);
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
            maxLength: 20,
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
            style: { marginRight: 8 },
          }}
          buttonElement={true}
          text="중복확인"
          onClickButton={handleClickDuplicateCheck}
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
                ...generationType,
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
                ...generationNum,
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
              { key: 'racer', value: 'USER', name: '레이서' },
              { key: 'coach', value: 'COACH', name: '코치' },
            ]}
            onChange={handleChangeroles}
          />
        </S.SelectContainer>
        <S.CheckBoxWrap>
          <CheckBox
            checked={checked}
            onChange={handleChangeCheckBox}
            text="(필수) 만 14세 이상 입니다."
            textStyle={{
              color: CS.color.contentSecondary,
              font: CS.font.labelMedium,
            }}
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
