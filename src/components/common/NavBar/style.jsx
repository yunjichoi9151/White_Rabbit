import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyles';

export const NavigationWrapper = styled.div`
  display: flex;
  background-color: ${CS.color.white};
  width: 100%;
  max-width: 900px;
  height: 100px;
  border-top: 0.2px solid ${CS.color.contentTertiary};
  align-items: center;
  justify-content: space-around;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  padding-bottom: 2rem;
  z-index: 999;
`;

export const ButtonWrapper = styled.div`
  width: 3.5rem;
  margin: 0 0.125rem;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  height: 1.5rem;
`;

export const IconWrap = styled.div`
  height: 1.5rem;
  padding-top: 0.2rem;
`;
