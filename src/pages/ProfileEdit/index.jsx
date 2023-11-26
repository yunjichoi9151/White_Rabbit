import React, { useEffect, useState } from 'react';
import { userApi } from '../../../api/utils/user';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import ProfileImg from '../../components/common/ProfileImg';
import Header from '../../components/common/Header';
import { useNavigate, useParams } from 'react-router';
import { ROUTER_LINK } from '../../router/routes';

function ProfileEdit() {
  //user 정보
  const [user, setUser] = useState({});

  const userInfo = async () => {
    try {
      const res = await userApi.getLoginUserInfo();
      setUser(res.data.data);
      setForm({
        inputNameValue: res.data.data.name,
        inputIdValue: res.data.data.email,
      });
      console.log('res', res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  const [form, setForm] = useState({
    inputNameValue: '',
    inputIdValue: '',
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClickDone = async () => {
    const res = await userApi.editUserById(
      user._id,
      form['inputNameValue'],
      form['inputIdValue'],
    );

    if (res.status === 200) {
      navigate(ROUTER_LINK.MYPAGE.link);
    }
  };

  return (
    <S.ProfileEditWrapper>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        typeRight={'TEXT'}
        textCenter={'프로필 편집'}
        textRight={'완료'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
        }}
        rightOnClickEvent={handleClickDone}
        leftOnClickEvent={() => navigate(-1)}
      />
      <ProfileImg
        src="/assets/img/account.png"
        style={{
          width: 72,
          margin: 20,
          border: 0,
        }}
        isEditable={true}
      />
      <InputBox
        label="이름"
        subTextProps={{
          type: 'show',
          text: `${form['inputNameValue'].length}/20`,
        }}
        inputProps={{
          value: form['inputNameValue'],
          onChange: onChange,
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
          value: form['inputIdValue'],
          onChange: onChange,
          placeholder: 'example@elice.com',
          name: 'inputIdValue',
        }}
        buttonElement={false}
      />
      <InputBox
        label="기수"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: user?.generation_type + ' ' + user?.generation_number + '기',
          name: 'inputStageValue',
          isReadOnly: 'true',
        }}
        signType="none"
        buttonElement={false}
      />
      <InputBox
        label="등급"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: user?.roles,
          name: 'inputRatingCheckValue',
          isReadOnly: 'true',
        }}
        signType="none"
        buttonElement={false}
      />
    </S.ProfileEditWrapper>
  );
}

export default ProfileEdit;
