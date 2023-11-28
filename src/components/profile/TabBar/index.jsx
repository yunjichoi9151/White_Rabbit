import React from 'react';
import * as S from './style';
import Tab from '../Tab';

const TabBar = ({
  tabNames,
  existCounter = false,
  countNum = 0,
  currentTabKey = '0',
  onTabClick,
  style,
}) => {
  return (
    <>
      <S.TabBar style={style}>
        {Object.keys(tabNames).map((key, index) => (
            <Tab
              key={key}
              tabName={tabNames[key]}
              existCounter={existCounter[key]}
              countNum={countNum[key]}
              isActive={currentTabKey === key}
              handleOnClick={() => onTabClick(key)}
            />
        ))}
      </S.TabBar>
    </>
  );
};

export default TabBar;
