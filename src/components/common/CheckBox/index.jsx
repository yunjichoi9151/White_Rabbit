import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../BasicText';

function CheckBox({
  checked = false,
  onChange,
  text,
  textColor = CS.color.black,
  style,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleonChange = (e) => {
    setIsChecked(e.target.checked);

    if (onChange) {
      onChange(e);
    }
  };
  return (
    <S.Container style={style}>
      <S.StyledInput
        checked={isChecked}
        type="checkbox"
        onChange={handleonChange}
      />
      {text ? (
        <BasicText
          text={text}
          style={{
            color: textColor,
            font: CS.font.labelSmall,
          }}
        />
      ) : (
        <></>
      )}
    </S.Container>
  );
}

export default CheckBox;
