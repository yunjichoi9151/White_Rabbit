import React, { useEffect, useState } from 'react';
import { userApi } from '../../../api/utils/user';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import ProfileImg from '../../components/common/ProfileImg';
import Header from '../../components/common/Header';
import { useNavigate, useParams } from 'react-router';

import userData from '../../test/user.json';

function ProfileEdit() {
  //user 정보
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const userInfo = async () => {
    try {
      const res = await userApi.getUserInfoById(userId);
      setUser(res.data.data.user);
      console.log('res', res);
    } catch (error) {
      console.log(error);
    }
  };
  const users = userData.data;

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

  const handleClickDone = () => {
    console.log('완료 클릭');
  };

  return (
    <div style={{ paddingTop: 64 }}>
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
          text: '0/20',
        }}
        inputProps={{
          value: form['inputNameValue'],
          onChange: onChange,
          placeholder: users.name,
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
          onChange: onChange,
          placeholder: users.email,
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
          value: form['inputStageValue'],

          placeholder:
            users.generation_type + ' ' + users.generation_number + '기',
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
          value: form['inputRatingCheckValue'],

          placeholder: users.roles,
          name: 'inputRatingCheckValue',
          isReadOnly: 'true',
        }}
        signType="none"
        buttonElement={false}
      />
    </div>
  );
}

export default ProfileEdit;
