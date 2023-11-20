import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const QNAWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FilterBar = styled.div`
  width: 100%;
  height: 100%;
  padding: 68px 24px 12px 24px;
  display: flex;
  justify-content: space-between;
`;
export const ButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const PostList = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${CS.color.secondary};
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

export const FixedButton = styled.div`
  background-color: ${CS.color.secondary};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: fixed;
  bottom: 116px;
  right: 16px;
  z-index: 999;
`;
