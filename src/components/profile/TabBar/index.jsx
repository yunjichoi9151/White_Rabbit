import React, { useState } from 'react';
import * as S from './style';
import Tab from '../Tab';

const TabBar = ({
  tabNames,
  existCounter,
  countNum,
  style,
  defaultActive,
  onTabClick,
}) => {
  const [currentTabKey, setCurrentTabKey] = useState(defaultActive || '0');

  const handleTabClick = (tabKey) => {
    setCurrentTabKey(tabKey);

    if (onTabClick) {
      onTabClick(tabKey);
    }
  };

  return (
    <>
      <S.TabBar style={style}>
        {Object.keys(tabNames).map((key, index) => (
          <Tab
            key={index}
            tabName={tabNames[key]}
            existCounter={existCounter}
            countNum={countNum[key]}
            isActive={currentTabKey === key}
            handleOnClick={() => handleTabClick(key)}
          />
        ))}
      </S.TabBar>
    </>
  );
};

export default TabBar;
