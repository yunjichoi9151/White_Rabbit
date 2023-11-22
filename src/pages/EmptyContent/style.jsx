import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const Container = styled.div`
  height: 100%;
  background-color: ${CS.color.secondary};
`;

export const Empty = styled.div`
  margin-top: 20px;
  background-color: ${CS.color.white};
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
