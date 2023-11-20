import styled from 'styled-components';

export const Header = styled.div`
  color: #000000;
  font-size: 100%;
  font-weight: normal;
  font-family: 'NanumBarunGothic';
  background-color: transparent;
  border-radius: 1rem;
  padding: 5%;
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
`;

export const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
