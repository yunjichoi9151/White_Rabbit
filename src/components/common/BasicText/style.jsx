import styled from 'styled-components';

export const Text = styled.div`
  font: ${(props) => props.font || 'var(--font-paragraph-small)'};
  color: ${(props) => props.color || '#000000'};
  background-color: ${(props) => props.$background || 'transparent'};
  border-radius: ${(props) => props.radius || '1rem'};
  padding: ${(props) => props.padding || 'auto'};
  height: 100%;
  display: flex;
  align-items: center;
`;
