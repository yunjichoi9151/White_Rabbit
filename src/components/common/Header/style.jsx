import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyles';

export const Header = styled.div`
  width: 100%;
  max-width: 900px;
  height: 4rem;
  padding: 1rem;
  background-color: ${CS.color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
`;

export const LeftWrap = styled.div`
  min-width: 40px;
  padding-right: 12px;
  display: flex;
`;

export const CenterWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RightWrap = styled.div`
  min-width: 40px;
  padding-left: 12px;
  display: flex;
  justify-content: flex-end;
`;

export const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
