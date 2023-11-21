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

  const handleOnChange = (e) => {
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
        onChange={handleOnChange}
      />
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
