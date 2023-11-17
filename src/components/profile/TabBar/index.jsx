import React, { useState } from 'react';
import * as S from './style';
import Tab from '../Tab';

const TabBar = ({ texts, existCounter, countNum }) => {
  const [currentTab, setCurrentTab] = useState('0');

  const handleTabClick = (tabKey) => {
    setCurrentTab(tabKey);
  };

  return (
    <>
      <S.TabBar>
        {Object.keys(texts).map((key, index) => (
          <Tab
            key={index}
            text={texts[key]}
            existCounter={existCounter[key]}
            countNum={countNum[key]}
            isActive={currentTab === key}
            onClick={() => handleTabClick(key)}
          />
        ))}
      </S.TabBar>
    </>
  );
};

export default TabBar;
