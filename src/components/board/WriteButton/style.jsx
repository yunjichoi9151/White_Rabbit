import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyles';

export const FixedButton = styled.div`
  background-color: ${CS.color.secondary};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: fixed;
  bottom: 116px;
  right: 16px;
  z-index: 999;
`;
