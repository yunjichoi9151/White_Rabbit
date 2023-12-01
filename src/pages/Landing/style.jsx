import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 50px;
  margin-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`;

export const LandingImg = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
`;

export const LandingText = styled.p`
  color: black;
  font-weight: bold;
  font-size: 32px;
  margin: 0;
  margin-bottom: 4px;
`;
export const LandingSubText = styled.p`
  color: ${CS.color.primary};
  font-weight: 600px;
  font-size: 20px;
  margin: 0;
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;

export const InputStyle = styled.div`
  margin-bottom: 12px;
`;

export const PwStyle = styled.div`
  color: ${CS.color.contentTertiary};
  display: flex;
  justify-content: right;
  margin: 20px;
`;
