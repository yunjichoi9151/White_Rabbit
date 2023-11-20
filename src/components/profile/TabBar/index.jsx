import React, { useState } from 'react';
import * as S from './style';
import Tab from '../Tab';

const TabBar = ({ tabNames, existCounter, countNum, onTabClick, style }) => {
  const [currentTabKey, setCurrentTabKey] = useState('0');

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
          <>
            <Tab
              key={index}
              tabName={tabNames[key]}
              existCounter={existCounter[key]}
              countNum={countNum[key]}
              isActive={currentTabKey === key}
              handleOnClick={() => handleTabClick(key)}
            />
          </>
        ))}
      </S.TabBar>
    </>
  );
};

export default TabBar;
