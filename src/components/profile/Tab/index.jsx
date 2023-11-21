import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';

const Tab = ({
  tabName,
  existCounter = false,
  countNum,
  isActive,
  handleOnClick,
  style,
}) => {
  return (
    <>
      <S.Tab onClick={handleOnClick} $isActive={isActive} style={style}>
        <BasicText
          text={tabName}
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
