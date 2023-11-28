import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicButton from '../../common/BasicButton';

const BottomModal = ({ onClose, onEdit, onDelete }) => {
  const btnStyle = () => ({
    width: '100%',
    height: '3rem',
    padding: '1rem',
    border: 'none',
    cursor: 'pointer',
    font: CS.font.labelLarge,
    // borderBottom: `1px solid ${CS.color.borderTransparent}`,
    zIndex: '2000',
    hoverBackgroundColor: CS.color.secondary,
  });
  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <BasicButton
          text="수정"
          handleOnClickButton={onEdit}
          btnStyle={btnStyle()}
          textStyle={{ color: CS.color.black, font: CS.font.labelMedium }}
        />
        <BasicButton
          text="삭제"
          handleOnClickButton={onDelete}
          btnStyle={btnStyle()}
          textStyle={{ color: CS.color.negative, font: CS.font.labelMedium }}
        />
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
};

export default BottomModal;
