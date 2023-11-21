import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const DetailWrap = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: ${CS.color.contentTertiary};
`;

export const BoardWrap = styled.div`
  width: 100%;
  display: flex;
  padding-top: 4rem;
`;

export const CommentWrap = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 7rem;
  background-color: ${CS.color.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CommentTitle = styled.div`
  width: 100%;
  padding: 0.5rem 1rem 0rem 1rem;
  font: ${CS.font.labelSmall};
`;

export const NewCommentWrap = styled.div`
  width: 100%;
  height: 5rem;
  max-width: 900px;
  padding: 1rem 1rem 1.5rem 1rem;
  background-color: ${CS.color.white};
  display: flex;
  position: fixed;
  z-index: 999;
  bottom: 0;
  border-top: 0.5px solid ${CS.color.borderTransparent};
`;
