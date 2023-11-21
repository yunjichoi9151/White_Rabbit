import React, { useState } from 'react';
import * as S from './style';
import Tab from '../Tab';

const TabBar = ({ tabNames, existCounter, countNum, style, defaultAcitve }) => {
  const [currentTabKey, setCurrentTabKey] = useState(defaultAcitve || '0');

  const handleTabClick = (tabKey) => {
    setCurrentTabKey(tabKey);
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
