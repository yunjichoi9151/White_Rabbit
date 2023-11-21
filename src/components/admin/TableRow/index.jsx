import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';

const TableRow = ({ colTexts, btnText, btnColor, handleBtnClick }) => {
  return (
    <>
      <S.TableRow>
        {colTexts.map((text, index) => (
          <BasicText
            key={index}
            text={text}
            style={{
              font: CS.font.labelSmall,
              justifyContent: 'center',
              minWidth: index === 1 ? '100px' : '30px',
            }}
          />
        ))}
        <BasicButton
          text={btnText}
          textStyle={{
            font: CS.font.labelSmall,
            color: CS.color.white,
            padding: '2px 4px',
            borderRadius: '4px',
            justifyContent: 'center',
            backgroundColor: btnColor,
          }}
          btnStyle={{
            width: 'auto',
            minWidth: '30px',
          }}
          handleOnClickButton={handleBtnClick}
        />
      </S.TableRow>
    </>
  );
};

export default TableRow;
