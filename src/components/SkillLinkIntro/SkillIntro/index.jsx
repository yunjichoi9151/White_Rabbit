import React from 'react';
import BasicText from '../../common/BasicText';
import * as S from './style';

function SkillIntro({ text }) {
  return (
    <>
      <S.Container>
        <BasicText
          text={text}
          style={{
            color: 'var(--color-black)',
            fontSize: 12,
            fontWeight: 600,

            padding: '8px 12px',

            border: '1px solid var(--color-secondary)',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </S.Container>
    </>
  );
}

export default SkillIntro;
