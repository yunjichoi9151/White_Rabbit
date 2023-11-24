import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const Container = styled.div`
  height: 100%;
  background-color: ${CS.color.secondary};
`;
export const BoardWrap = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  background-color: ${CS.color.secondary};
  gap: 0.5rem;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  /* margin-top: 20px; */
`;
