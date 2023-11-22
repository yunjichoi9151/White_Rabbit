import React from 'react';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import BasicText from '../../components/common/BasicText';

function EmptyContent({ type }) {
  return (
    <>
      <S.Container>
        <BasicText
          text={type === 'content' ? '게시물 0개' : '댓글 0개'}
          style={{
            background: CS.color.white,
            height: 40,
            borderRadius: 0,
            font: CS.font.labelSmall,
            color: CS.color.contentTertiary,
            paddingLeft: 28,
          }}
        />
        <S.Empty>
          <IoChatbubbleEllipsesOutline
            style={{
              color: CS.color.contentTertiary,
              width: 100,
              height: 100,
              marginBottom: 8,
            }}
          />
          <BasicText
            text={
              type === 'content'
                ? '아직 작성한 게시물이 없어요.'
                : '아직 작성한 댓글이 없어요.'
            }
            style={{ color: CS.color.contentTertiary }}
          />
        </S.Empty>
      </S.Container>
    </>
  );
}

export default EmptyContent;
