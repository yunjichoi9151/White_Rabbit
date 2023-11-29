import styled, { keyframes } from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: fadeIn 0.3s ease-in-out;
  z-index: 2000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 900px;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  border-radius: 1rem 1rem 0rem 0rem;
  animation: slideUp 0.3s ease-in-out;
  z-index: 2000;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  background-color: #f8f8f8;
  cursor: pointer;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  z-index: 2000;

  &:hover {
    background-color: #e8e8e8;
  }
`;
