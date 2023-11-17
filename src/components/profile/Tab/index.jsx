import React from 'react';
import * as S from './style';
import BasicText from '../../common/BasicText';

const Tab = ({ text, existCounter, isActive, onClick }) => {
  return (
    <>
      <S.Tab onClick={onClick} isActive={isActive}>
        <BasicText
          text={text}
          color={
            isActive ? 'var(--color-black)' : 'var(--color-content-tertiary)'
          }
        />
        {existCounter && (
          <BasicText
            text={'0'}
            color={
              isActive ? 'var(--color-black)' : 'var(--color-content-tertiary)'
            }
          />
        )}
      </S.Tab>
    </>
  );
};

export default Tab;
