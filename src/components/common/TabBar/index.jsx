import React from 'react';
import * as S from './style';
import Tab from '../Tab';

const TabBar = ({ texts, isCountables, currentTab, onTabClick }) => {
  const handleTabClick = (tabKey) => {
    onTabClick(tabKey);
  };
  return (
    <>
      <S.TabBar>
        {Object.keys(texts).map((key, index) => (
          <Tab
            key={index}
            text={texts[key]}
            isCountable={isCountables[key]}
            isActive={currentTab === key}
            onClick={() => handleTabClick(key)}
          />
        ))}
      </S.TabBar>
    </>
  );
};

export default TabBar;
