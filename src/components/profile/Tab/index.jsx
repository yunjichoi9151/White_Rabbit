import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';

const Tab = ({ text, existCounter, countNum, isActive, onClick, style }) => {
  return (
    <>
      <S.Tab onClick={onClick} isActive={isActive} style={style}>
        <BasicText
          text={text}
          style={{
            color: isActive ? CS.color.black : CS.color.contentTertiary,
          }}
        />
        {existCounter && (
          <BasicText
            text={countNum}
            style={{
              color: isActive ? CS.color.black : CS.color.contentTertiary,
            }}
          />
        )}
      </S.Tab>
    </>
  );
};

export default Tab;
