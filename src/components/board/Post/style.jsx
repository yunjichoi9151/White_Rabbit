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
  align-items: flex-start;
  cursor: pointer;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;
export const ShowWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1.75rem;
  display: flex;
  justify-content: flex-end;
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
export const IconWrapperCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const ImgWrapper = styled.div`
  /* width: 100%; */
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HotWrapper = styled.div`
  width: 3.5rem;
  display: flex;
  padding: 0.5rem;
`;
