import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const RecruitmentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 64px;
  background-color: ${CS.color.secondary};
`;

export const FilterBar = styled.div`
  width: 100%;
  min-height: 3rem;
  padding: 0px 24px;
  background-color: ${CS.color.white};
  display: flex;
  align-items: center;
`;

export const PostList = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 100px;
  background-color: ${CS.color.secondary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
