import React, { useState } from 'react';
import * as S from './style';
import Tab from '../Tab';

const TabBar = ({
  texts,
  existCounter,
  countNum,
  currentTabKey,
  handleOnClick,
  style,
}) => {
  return (
    <>
      <S.TabBar style={style}>
        {Object.keys(texts).map((key, index) => (
          <>
            <Tab
              key={index}
              text={texts[key]}
              existCounter={existCounter[key]}
              countNum={countNum[key]}
              isActive={currentTabKey == key}
              handleOnClick={handleOnClick}
            />
          </>
        ))}
      </S.TabBar>
    </>
  );
};

export default TabBar;
