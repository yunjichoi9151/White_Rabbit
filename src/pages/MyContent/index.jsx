import React from 'react';
import { ROUTER_LINK } from '../../router/routes';
import { Navigate } from 'react-router';
import Post from '../../components/board/Post';
import BasicText from '../../components/common/BasicText';
import * as CS from '../../styles/CommonStyles';
import * as S from './style';

import userData from '../../test/user.json';
import boardData from '../../test/board.json';

function MyContent({ type }) {
  const users = userData.data;
  const board = boardData.data;

  console.log(board);

  // users._id === board.author

  return (
    <>
      <S.Container>
        <BasicText
          text={type === 'content' ? `게시물 ${Post.length}개` : '댓글 0개'}
          style={{
            background: CS.color.white,
            height: 40,
            borderRadius: 0,
            font: CS.font.labelSmall,
            color: CS.color.contentTertiary,
            paddingLeft: 28,
          }}
        />
        <S.BoardWrap>
          <Post
            title={board.title}
            content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
            src={
              users.profile_url === ''
                ? '/assets/img/elice_icon.png'
                : users.profile_url
            }
            likes={board.like_count}
            category={board.category}
            username={users.name}
            rate={users.roles}
            createdAt={board.createdAt}
            contentLength="SHORT"
            comments={board.commentCount}
            handleOnClickPost={() =>
              Navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
            }
          />
        </S.BoardWrap>
        <S.BoardWrap>
          <Post
            title={board.title}
            content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
            src={
              users.profile_url === ''
                ? '/assets/img/elice_icon.png'
                : users.profile_url
            }
            likes={board.like_count}
            category={board.category}
            username={users.name}
            rate={users.roles}
            createdAt={board.createdAt}
            contentLength="SHORT"
            comments={board.commentCount}
            handleOnClickPost={() =>
              Navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
            }
          />
        </S.BoardWrap>
        <S.BoardWrap>
          <Post
            title={board.title}
            content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
            src={
              users.profile_url === ''
                ? '/assets/img/elice_icon.png'
                : users.profile_url
            }
            likes={board.like_count}
            category={board.category}
            username={users.name}
            rate={users.roles}
            createdAt={board.createdAt}
            contentLength="SHORT"
            comments={board.commentCount}
            handleOnClickPost={() =>
              Navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
            }
          />
        </S.BoardWrap>
        <S.BoardWrap>
          <Post
            title={board.title}
            content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
            src={
              users.profile_url === ''
                ? '/assets/img/elice_icon.png'
                : users.profile_url
            }
            likes={board.like_count}
            category={board.category}
            username={users.name}
            rate={users.roles}
            createdAt={board.createdAt}
            contentLength="SHORT"
            comments={board.commentCount}
            handleOnClickPost={() =>
              Navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
            }
          />
        </S.BoardWrap>
        <S.BoardWrap>
          <Post
            title={board.title}
            content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
            src={
              users.profile_url === ''
                ? '/assets/img/elice_icon.png'
                : users.profile_url
            }
            likes={board.like_count}
            category={board.category}
            username={users.name}
            rate={users.roles}
            createdAt={board.createdAt}
            contentLength="SHORT"
            comments={board.commentCount}
            handleOnClickPost={() =>
              Navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
            }
          />
        </S.BoardWrap>
      </S.Container>
    </>
  );
}

export default MyContent;
