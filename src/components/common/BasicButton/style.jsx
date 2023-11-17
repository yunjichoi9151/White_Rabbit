import styled from 'styled-components';

export const BasicButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 1rem;
  font-size: 100%;
  padding: 0rem;
  background-color: transparent;
  pointer-events: auto;
  cursor: pointer;
  &:active {
    filter: brightness(0.9);
  }
`;
