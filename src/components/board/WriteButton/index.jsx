import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTER_LINK } from '../../../router/routes';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicButton from '../../common/BasicButton';
import { AiFillEdit } from 'react-icons/ai';

const WriteButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.FixedButton>
        <BasicButton
          existText={false}
          existIcon={true}
          children={<AiFillEdit color={CS.color.black} size={20} />}
          handleOnClickButton={() => navigate(ROUTER_LINK.WRITE.path)}
        />
      </S.FixedButton>
    </>
  );
};

export default WriteButton;
