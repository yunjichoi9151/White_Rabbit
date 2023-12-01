import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../BasicText';

function CheckBox({ checked = false, onChange, text, textStyle, style }) {
  return (
    <S.Container style={style}>
      <S.StyledInput checked={checked} type="checkbox" onChange={onChange} />
      {text ? <BasicText text={text} style={textStyle} /> : <></>}
    </S.Container>
  );
}

export default CheckBox;
