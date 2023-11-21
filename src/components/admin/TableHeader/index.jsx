import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';

const TableHeader = ({ haderTexts }) => {
  return (
    <>
      <S.TableHeader>
        {haderTexts.map((text, index) => (
          <BasicText
            key={index}
            text={text}
            style={{
              font: CS.font.headingMedium,
              justifyContent: 'center',
              minWidth: index === 1 ? '100px' : '30px',
            }}
          />
        ))}
      </S.TableHeader>
    </>
  );
};

export default TableHeader;
