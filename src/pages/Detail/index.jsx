import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Post from '../../components/board/Post';
import userData from '../../test/user.json';
import Header from '../../components/common/Header';
import Reply from '../../components/board/Reply';
import ProfileImg from '../../components/common/ProfileImg';
import InputBar from '../../components/common/InputBar';
import BasicButton from '../../components/common/BasicButton';
import { postApi } from '../../../api/utils/Post';
import { commentApi } from '../../../api/utils/Comment';

const Detail = () => {
  const [active, setActive] = useState('ALL');
  const [inputData, setInputData] = useState('');
  const navigate = useNavigate();
  const { postId } = useParams();
  // const post = detailData.data;
  const [post, setPost] = useState([]);

  const postDetail = async () => {
    try {
      const res = await postApi.getPostByPostId(postId);
      setPost(res.data.data.post);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  const user = userData.data;
  // const comments = commentData.data;
  const [comments, setComments] = useState([]);

  // GET All Comments
  const commentsList = async () => {
    try {
      const res = await commentApi.getCommentsByPost(postId);
      setComments(res.data.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  // POST New Comment
  const newCommentHandler = useCallback(
    async (content) => {
      try {
        // await commentApi.postComment(postId, content);
        console.log(content);
        commentsList();
      } catch (error) {
        console.log('error: ', error);
      }
    },
    [commentsList],
  );

  // CHANGE InputData
  const changeInputData = (e) => {
    setInputData(e.target.value);
  };

  // PRESS Enter Key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputData.length !== 0) {
      newCommentHandler(inputData);
      setInputData('');
    }
  };

  // ONCLICK Button
  const handleOnClick = () => {
    if (inputData !== '') {
      newCommentHandler(inputData);
      setInputData('');
    }
  };

  const labelText = {
    BOARD: '자유게시판',
    REVIEW: '취업후기',
    QNA: '개발 Q&A',
    PROJECT: '프로젝트',
    STUDY: '스터디',
  };

  useEffect(() => {
    postDetail();
    commentsList();
  }, []);

  return (
    <S.DetailWrap>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        textCenter={labelText[post.category]}
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
          src={
            user.profile_url === ''
              ? '/assets/img/elice_icon.png'
              : user.profile_url
          }
          likes={post.like_count}
          category={post.category}
          username={post.author}
          rate={user.roles}
          contentLength="ALL"
          isHot={true}
          createdAt={post.createdAt}
          comments={post.commentCount}
        />
      </S.BoardWrap>
      <S.CommentWrap>
        <S.CommentTitle>댓글 {comments.length}</S.CommentTitle>
        {comments.map((comment, index) => (
          <Reply
            key={index}
            src={user.profile_url}
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
          value={inputData}
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
          handleOnChangeValue={changeInputData}
          handleOnKeyDownValue={handleKeyPress}
        >
          <BasicButton
            text="등록"
            textStyle={{
              font: CS.font.labelSmall,
            }}
            btnStyle={{ width: '2rem' }}
            handleOnClickButton={handleOnClick}
          />
        </InputBar>
      </S.NewCommentWrap>
    </S.DetailWrap>
  );
};

export default Detail;
