import styled from 'styled-components';

export const BasicButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ way }) => way || 'row'};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  font-size: ${({ fontSize }) => fontSize};
  padding: 0rem;
  background-color: ${({ color }) => color};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  &:active {
    filter: brightness(0.9);
  }
`;
