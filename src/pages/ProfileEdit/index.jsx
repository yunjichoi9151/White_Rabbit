import React, { useEffect, useState } from 'react';
import InputBox from '../../components/common/InputBox';
import ProfileImg from '../../components/common/ProfileImg';
import { useOutletContext } from 'react-router-dom';

function ProfileEdit() {
  const [form, setForm] = useState({
    inputNameValue: '',
    inputIdValue: '',
    // inputStageValue: '',
    // inputRatingCheckValue: '',
  });

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const test = () => {
    console.log('test');
  };

  const chatLogProps = useOutletContext();
  console.log('chatLogProps', chatLogProps);

  useEffect(() => {
    if (chatLogProps) {
      chatLogProps.btnOnClickEvent = test;

      // cleanup 함수
      return () => {
        chatLogProps.btnOnClickEvent = undefined;
      };
    }
  }, [chatLogProps]);

  return (
    <>
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
    </>
  );
}

export default ProfileEdit;
