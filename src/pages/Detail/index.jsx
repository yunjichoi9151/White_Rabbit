import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Post from '../../components/board/Post';
import Header from '../../components/common/Header';
import Reply from '../../components/board/Reply';
import ProfileImg from '../../components/common/ProfileImg';
import InputBar from '../../components/common/InputBar';
import BasicButton from '../../components/common/BasicButton';
import { postApi } from '../../../api/utils/Post';
import { commentApi } from '../../../api/utils/comment';
import { userApi } from '../../../api/utils/user';
import BottomModal from '../../components/board/BottomModal';
import { ROUTER_LINK } from '../../router/routes';
import { SERVER_URL } from '../../../api';

const labelText = {
  BOARD: '자유게시판',
  REVIEW: '취업후기',
  QNA: '개발 Q&A',
  PROJECT: '프로젝트',
  STUDY: '스터디',
};

const Detail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  // GET Post Detail
  const [post, setPost] = useState({});

  const postDetail = async () => {
    try {
      const res = await postApi.getPostByPostId(postId);
      setPost(res.data.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  // GET LoginUser Info
  const [user, setUser] = useState({});

  const userInfo = async () => {
    try {
      const res = await userApi.getLoginUserInfo();
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // GET All Comments
  const [comments, setComments] = useState([]);

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
        await commentApi.postComment(postId, content);
        commentsList();
      } catch (error) {
        console.log('error: ', error);
      }
    },
    [commentsList],
  );

  // CHANGE InputData
  const [inputData, setInputData] = useState('');

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

  // Editable
  const [editableCommentId, setEditableCommentId] = useState(null);
  const [targetId, setTargetId] = useState(null);

  // Modal
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Click Three Dots Btn
  const handleOnClickDots = (type, id) => {
    setIsModalOpen(true);
    setModalType(type);
    setTargetId(id);
  };

  // Modal Close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // EDIT Post & Comment
  const handleEdit = () => {
    setIsModalOpen(false);
    if (modalType === 'comment') {
      setEditableCommentId(targetId);
    } else if (modalType === 'post') {
      navigate(ROUTER_LINK.POSTEDIT.path.replace(':postId', postId));
    }
  };

  // DELETE Post & Comment
  const handleDelete = async () => {
    setIsModalOpen(false);
    if (modalType === 'comment') {
      try {
        await commentApi.deleteComment(targetId);
        commentsList();
      } catch (error) {
        console.log('error: ', error);
      }
    } else if (modalType === 'post') {
      try {
        await postApi.deletePost(postId);
        navigate(ROUTER_LINK.HOME.link);
      } catch (error) {
        console.log('error: ', error);
      }
    }
  };

  // UPDATE Comment List
  const handleCommentUpdated = () => {
    setEditableCommentId(null);
    commentsList();
  };

  // Like Handler
  const likeHandler = async (postId) => {
    try {
      await postApi.putLike(postId);
      postDetail();
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    userInfo();
    postDetail();
    commentsList();
  }, []);

  return (
    <S.DetailWrap>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        textCenter={labelText[post?.post?.category]}
        headerStyle={{
          borderBottom: `0.5px solid ${CS.color.contentTertiary}`,
          backgroundColor: CS.color.white,
        }}
        leftOnClickEvent={() => navigate(-1)}
      />
      <S.BoardWrap>
        {post && (
          <Post
            title={post?.post?.title}
            content={post?.post?.content}
            src={
              post?.post?.author?.profile_url || '/assets/img/elice_icon.png'
            }
            likes={post?.post?.like_count}
            isLike={post?.isLiked}
            category={post?.post?.category}
            username={post?.post?.author?.name}
            rate={post?.post?.author?.roles}
            contentLength="ALL"
            isHot={post?.isPopular}
            createdAt={post?.post?.createdAt}
            comments={post?.commentCount}
            existFollowBtn={
              user?._id === post?.post?.author?._id ? false : true
            }
            existMoreBtn={user?._id === post?.post?.author?._id ? true : false}
            handleOnClickDots={() => handleOnClickDots('post', post?.post?._id)}
            handleOnClickLikeBtn={() => likeHandler(post?.post?._id)}
            isFollow={post?.isFollowing}
            handleOnClickProfile={() =>
              navigate(
                ROUTER_LINK.USERPAGE.path.replace(
                  ':userId',
                  post?.post?.author?._id,
                ),
              )
            }
            imgSrc={SERVER_URL + post?.post?.image_url}
            view={post?.post?.view_count}
            isDetail={true}
          />
        )}
      </S.BoardWrap>
      <S.CommentWrap>
        {comments && (
          <>
            <S.CommentTitle>댓글 {comments.length}</S.CommentTitle>
            {comments.map((comment, index) => (
              <React.Fragment key={index}>
                <Reply
                  src={
                    comment.author.profile_url || '/assets/img/elice_icon.png'
                  }
                  rate={comment.author.roles}
                  username={comment.author.name}
                  comment={comment.content}
                  commentId={comment._id}
                  createdAt={comment.createdAt}
                  style={{ backgroundColor: CS.color.white }}
                  existMoreBtn={user?._id === comment.author?._id}
                  handleOnClickDots={() =>
                    handleOnClickDots('comment', comment._id)
                  }
                  isEditable={editableCommentId === comment._id}
                  onCommentUpdated={handleCommentUpdated}
                />
              </React.Fragment>
            ))}
          </>
        )}
        {isModalOpen && (
          <BottomModal
            onClose={handleCloseModal}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </S.CommentWrap>

      <S.NewCommentWrap>
        <ProfileImg
          src={
            user?.profile_url === ''
              ? '/assets/img/elice_icon.png'
              : user?.profile_url
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
