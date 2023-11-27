import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const TabWrap = styled.div`
  display: flex;
  padding-top: 64px;
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

export const UnderLine = styled.div`
  border-bottom: 1px solid ${CS.color.contentTertiary};
`;
