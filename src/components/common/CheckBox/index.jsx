import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../BasicText';

function CheckBox({ checked, onChange, text }) {
  return (
    <S.Container>
      <S.StyledInput checked={checked} type="checkbox" onChange={onChange} />
      {text ? (
        <BasicText
          text={text}
          style={{
            color: CS.color.black,
            fontWeight: 600,
            fontSize: 12,
          }}
        />
      ) : (
        <></>
      )}
    </S.Container>
  );
}

export default CheckBox;
