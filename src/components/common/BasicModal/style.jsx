import styled, { keyframes } from 'styled-components';

export const BasicModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1001;
  animation: ${fadeIn} 0.3s ease;
`;

export const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
`;

export const ModalChildren = styled.div`
  width: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
