import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyles';

export const Input = styled.input`
  width: 100%;
  font-size: 1.75rem;
  border: none;
  background-color: transparent;
  text-align: center;
  &::placeholder {
    color: ${CS.color.contentTertiary};
  }
`;
