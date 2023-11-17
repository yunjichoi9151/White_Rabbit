import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ direction }) =>
    direction === 'column' ? 'center' : 'flex-start'};
  align-items: ${({ direction }) =>
    direction === 'column' ? 'flex-start' : 'center'};
`;
