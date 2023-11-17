import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyles';

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
`;
