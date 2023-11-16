import styled from 'styled-components';

export const CustomIconButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.$way || 'row'};
  width: ${(props) => props.size || '100%'};
  height: ${(props) => props.size || '100%'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.radius || 1};
  padding: 0rem;
  background-color: ${(props) => props.color};
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'auto')};
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  &:active {
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.15);
  }
`;
