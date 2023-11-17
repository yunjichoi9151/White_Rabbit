import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  display: flex;
  padding: ${({ padding }) => padding || 0};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ direction }) =>
    direction === 'column' ? 'center' : 'flex-start'};
  align-items: ${({ direction }) =>
    direction === 'column' ? 'flex-start' : 'center'};
`;
