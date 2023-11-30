import React from 'react';
import * as S from './style';

const SelectBar = ({ style, options, onChange, value, name }) => {
  const handleSelectChange = (e) => {
    const selectValue = e.target.value;
    if (onChange) {
      onChange(selectValue);
    }
  };

  return (
    <S.SelectBar
      style={style}
      onChange={handleSelectChange}
      value={value}
      name={name}
    >
      {options.map((option, index) => (
        <option
          key={`${option.key}_${index}`}
          value={option.value}
          style={option.style}
        >
          {option.name}
        </option>
      ))}
    </S.SelectBar>
  );
};

export default SelectBar;
