import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${CS.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 20px 20px 20px;
  display: flex;
  align-items: center;
`;
export const IconBar = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 24px;
  border-top: solid 1px ${CS.color.borderTransparent};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
