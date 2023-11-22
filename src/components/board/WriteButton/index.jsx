import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../../router/routes';
import * as S from './style';
import BasicButton from '../../common/BasicButton';
import { AiFillEdit } from 'react-icons/ai';

const WriteButton = () => {
  return (
    <>
      <S.FixedButton>
        <Link to={ROUTER_LINK.WRITE.path}>
          <BasicButton
            existText={false}
            existIcon={true}
            children={<AiFillEdit size={20} />}
          />
        </Link>
      </S.FixedButton>
    </>
  );
};

export default WriteButton;
