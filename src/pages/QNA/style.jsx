import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const QNAWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  background-color: ${CS.color.secondary};
`;

export const FilterBar = styled.div`
  width: 100%;
  min-height: 36px;
  padding: 0px 24px 0px 24px;
  display: flex;
  justify-content: space-between;
  background-color: ${CS.color.white};
`;
export const ButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const PostList = styled.div`
  width: 100%;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 12px;
  display: flex;
`;
