import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyles';

export const FixedButton = styled.div`
  background-color: ${CS.color.white};
  border: 1px solid ${CS.color.borderTransparent};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 116px;
  right: 16px;
  z-index: 999;

  @media (min-width: 901px) {
    right: calc((100% - 900px) / 2 + 16px);
  }
`;
