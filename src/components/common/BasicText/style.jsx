import styled from 'styled-components';

export const Text = styled.div`
  color: ${(props) => props.color || '#000000'};
  font-size: ${(props) => props.size || '100%'};
  font-weight: ${(props) => props.$bold || 'normal'};
  font-family: ${(props) => props.font};
  background-color: ${(props) => props.$background || 'transparent'};
  border-radius: ${(props) => props.radius || '1rem'};
  padding: ${(props) => props.padding || 'auto'};
  height: 100%;
  display: flex;
  align-items: center;
`;
