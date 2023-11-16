import React from 'react';
import * as S from './style';
import BasicText from '../BasicText';

const Tab = ({ text, isCountable, isActive, onClick }) => {
  return (
    <>
      <S.Tab onClick={onClick} isActive={isActive}>
        <BasicText
          text={text}
          color={isActive ? 'black' : 'var(--color-content-tertiary)'}
        />
        {isCountable && (
          <BasicText
            text={'0'}
            color={isActive ? 'black' : 'var(--color-content-tertiary)'}
          />
        )}
      </S.Tab>
    </>
  );
};

export default Tab;
