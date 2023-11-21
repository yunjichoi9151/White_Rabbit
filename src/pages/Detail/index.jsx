import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import NavBar from '../../components/common/NavBar';
import Post from '../../components/board/Post';
import detailData from '../../test/detail.json';
import userData from '../../test/user.json';
import commentData from '../../test/comment.json';
import Header from '../../components/common/Header';
import Reply from '../../components/board/Reply';
import ProfileImg from '../../components/common/ProfileImg';
import InputBar from '../../components/common/InputBar';
import BasicButton from '../../components/common/BasicButton';

const Detail = () => {
  const [active, setActive] = useState('ALL');
  const navigate = useNavigate();
  const post = detailData.data;
  const user = userData.data;
  const comments = commentData.data;

  const labelText = {
    BOARD: '자유게시판',
    REVIEW: '취업후기',
    QNA: '개발 Q&A',
    PROJECT: '프로젝트',
    STUDY: '스터디',
  };

  return (
    <S.DetailWrap>
      <Header
        existLeft={true}
        existText={true}
        text={labelText[post.category]}
        headerStyle={{
          borderBottom: `0.5px solid ${CS.color.contentTertiary}`,
          backgroundColor: CS.color.white,
        }}
        leftOnClickEvent={() => navigate(-1)}
      />
      <S.BoardWrap>
        <Post
          title={post.title}
          content={post.content}
          src={post.image_url}
          likes={post.like_count}
          category={post.category}
          username={post.author}
          rate={user.roles}
          contentLength="ALL"
          isHot={true}
          createdAt={post.createdAt}
        />
      </S.BoardWrap>
      <S.CommentWrap>
        <S.CommentTitle>댓글 {comments.length}</S.CommentTitle>
        {comments.map((comment, index) => (
          <Reply
            key={index}
            src={user.image_url}
            rate={user.roles}
            username={comment.author}
            comment={comment.content}
            createdAt={comment.createdAt}
            style={{ backgroundColor: CS.color.white }}
          />
        ))}
      </S.CommentWrap>
      <S.NewCommentWrap>
        <ProfileImg
          src={
            user.profile_url === ''
              ? '/assets/img/elice_icon.png'
              : user.profile_url
          }
          style={{ width: '2.5rem', height: '2.5rem' }}
        />
        <InputBar
          placeholder="댓글을 남겨보세요."
          inputBarStyle={{
            height: '2.5rem',
            padding: '0.5rem 0.75rem',
            marginLeft: '0.75rem',
            backgroundColor: CS.color.secondary,
            borderRadius: '1rem',
            display: 'flex',
          }}
          inputStyle={{
            font: CS.font.labelSmall,
            textAlign: 'left',
            alignItems: 'center',
          }}
          existRight={true}
        >
          <BasicButton
            text="등록"
            textStyle={{
              font: CS.font.labelSmall,
            }}
            btnStyle={{ width: '2rem' }}
          />
        </InputBar>
      </S.NewCommentWrap>
    </S.DetailWrap>
  );
};

export default Detail;
