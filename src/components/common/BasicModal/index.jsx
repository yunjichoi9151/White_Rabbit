import React, { useEffect } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicButton from '../BasicButton';
import { IoCloseSharp } from 'react-icons/io5';

const BasicModal = ({ closeModal, children }) => {
  return (
    <S.BasicModal
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <S.ModalContent>
        <S.CloseBtn>
          <BasicButton
            existIcon={true}
            existText={false}
            handleOnClickButton={closeModal}
          >
            <IoCloseSharp />
          </BasicButton>
        </S.CloseBtn>
        <S.ModalChildren>{children}</S.ModalChildren>
      </S.ModalContent>
    </S.BasicModal>
  );
};

export default BasicModal;
