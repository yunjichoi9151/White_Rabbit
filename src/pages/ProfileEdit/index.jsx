import React, { useState } from 'react';
import * as CS from '../../styles/CommonStyles';
import InputBox from '../../components/common/InputBox';
import ProfileImg from '../../components/common/ProfileImg';
import Header from '../../components/common/Header';

function ProfileEdit() {
  const [form, setForm] = useState({
    inputNameValue: '',
    inputIdValue: '',
  });

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
        typeLeft={'TEXT'}
        typeRight={'TEXT'}
        textLeft={'프로필 편집'}
        textRight={'완료'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
        }}
        rightOnClickEvent={handleClickDone}
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
        label="기수"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form['inputStageValue'],
          handleOnChangeValue: onChange,
          placeholder: 'SW 엔지니어 트랙 6기',
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
          handleOnChangeValue: onChange,
          placeholder: '레이서',
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
