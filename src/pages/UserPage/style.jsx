import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const MyPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  overflow-y: auto;
`;
export const ProfileWrap = styled.div`
  display: flex;
`;

export const TabWrap = styled.div`
  display: flex;
`;
export const Tab = styled.div`
  width: 100%;
  height: 100%;
  min-height: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) =>
    props.isActive
      ? `2px solid ${CS.color.borderOpaque}`
      : `1px solid ${CS.color.borderTransparent}`};
  cursor: pointer;
  font: ${CS.font.labelSmall};
`;
export const TabBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
