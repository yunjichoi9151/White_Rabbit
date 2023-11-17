import React from 'react';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';

function EmptyIntro({ text, onClickButton, type }) {
  return (
    <>
      <BasicText
        text={text}
        style={{
          color: CS.color.contentSecondary,
          fontSize: 12,
          marginTop: 12,
        }}
      />

      <BasicButton
        text={type === 'skill' ? '+ 스킬 추가' : '+ 링크 추가'}
        textStyle={{ fontColor: CS.color.black, fontSize: '10px' }}
        btnStyle={{
          backgroundColor: CS.color.white,
          width: '90px',
          height: '20px',
          radius: '10px',
          border: `1px solid ${CS.color.borderTransparent}`,
          marginTop: 12,
        }}
        onClick={onClickButton}
      />
    </>
  );
}

export default EmptyIntro;
