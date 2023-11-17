import React from 'react';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';

function EmptyIntro({ text, onClickButton, type }) {
  return (
    <>
      <BasicText
        text={text}
        style={{
          color: 'var(--color-content-secondary)',
          fontSize: 12,
          marginTop: 12,
        }}
      />

      <BasicButton
        text={type === 'skill' ? '+ 스킬 추가' : '+ 링크 추가'}
        textStyle={{ fontColor: 'var(--color-black)', fontSize: '10px' }}
        btnStyle={{
          backgroundColor: 'var(--color-white)',
          width: '90px',
          height: '20px',
          radius: '10px',
          border: '1px solid var(--color-border-transparent)',
          marginTop: 12,
        }}
        onClick={onClickButton}
      />
    </>
  );
}

export default EmptyIntro;
