import React from 'react';
import * as S from './style';
import BasicButton from '../../common/BasicButton';
import { AiFillEdit } from 'react-icons/ai';

const WriteButton = () => {
  return (
    <>
      <S.FixedButton>
        <BasicButton
          existText={false}
          existIcon={true}
          children={<AiFillEdit size={20} />}
        />
      </S.FixedButton>
    </>
  );
};

export default WriteButton;
