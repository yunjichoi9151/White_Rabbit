import React from 'react';
import BasicText from '../BasicText';
import * as S from './style';

function CheckBox({ checked, onChange, text }) {
  return (
    <S.Container>
      <S.StyledInput checked={checked} type="checkbox" onChange={onChange} />
      {text ? (
        <BasicText
          text={text}
          style={{
            color: 'var(--color-black)',
          }}
        />
      ) : (
        <></>
      )}
    </S.Container>
  );
}

export default CheckBox;
