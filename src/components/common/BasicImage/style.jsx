import styled from 'styled-components';

export const BasicImage = styled.img`
  width: ${(props) => props.size || '100%'};
  height: ${(props) => props.size || '100%'};
  border-radius: ${(props) => props.radius || '1'}rem;
  object-fit: cover;
`;
