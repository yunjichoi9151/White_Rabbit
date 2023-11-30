import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import BasicButton from '../../components/common/BasicButton';
import WriteButton from '../../components/board/WriteButton';
import CheckBox from '../../components/common/CheckBox';
import BasicModal from '../../components/common/BasicModal';
import Post from '../../components/board/Post';
import { FaCircle } from 'react-icons/fa';
import { postApi } from '../../../api/utils/Post';
import { userApi } from '../../../api/utils/user';
import { followApi } from '../../../api/utils/Follow';
import { SERVER_URL } from '../../../api';

const sortType = {
  NEW: 'new',
  COMMENT: 'comment',
};

const QNA = () => {
  const category = 'QNA';
  const [userInfo, setUserInfo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState(sortType.NEW);
  const [isMineOnly, setIsMineOnly] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [clickedPostId, setClickedPostId] = useState('');

  const navigate = useNavigate();

  const fetchUserInfo = async () => {
    try {
      const res = await userApi.getLoginUserInfo();
      setUserInfo(res.data.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await postApi.getCategoryPosts(category, searchKeyword, sort);
      setPosts(res.data.data.posts);
      filterMyPosts(res.data.data.posts);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchClick = () => {
    fetchPosts();
  };
  const handleSortClick = (sortBy) => {
    setSort(sortBy);
  };

  const handleCheckBoxChange = (e) => {
    setIsMineOnly(e.target.checked);
  };

  const handleFollowClick = async (clickedPost) => {
    try {
      let followId;
      if (clickedPost.isFollowing) {
        await followApi.deleteFollow(clickedPost.followList._id);
      } else {
        const res = await followApi.postFollow(clickedPost.author._id);
        followId = res.data.followId;
      }

      const updatedPosts = filteredPosts.map((post) => {
        if (post._id === clickedPost._id) {
          return {
            ...post,
            isFollowing: !post.isFollowing,
            followList: { _id: followId },
          };
        }
        return post;
      });

      setFilteredPosts(updatedPosts);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);

  const openModal = (postId) => {
    setClickedPostId(postId);
    setIsMoreModalOpen(true);
  };

  const closeModal = () => {
    setIsMoreModalOpen(false);
  };

  const editPost = () => {
    navigate(ROUTER_LINK.POSTEDIT.path.replace(':postId', clickedPostId));
  };

  const deletePost = () => {
    try {
      const isConfirmed = window.confirm('정말 삭제하시겠습니까?');

      if (isConfirmed) {
        postApi.deletePost(clickedPostId);
      }
      alert('삭제 되었습니다.');

      setFilteredPosts((prevPosts) =>
        prevPosts.filter((post) => post._id !== clickedPostId),
      );
    } catch (error) {
      alert('게시글 삭제에 실패했습니다.');
    } finally {
      setIsMoreModalOpen(false);
    }
  };

  const handleLikeClick = async (clickedPost) => {
    try {
      const res = await postApi.putLike(clickedPost._id);
      const updatedPosts = filteredPosts.map((post) => {
        if (post._id === clickedPost._id) {
          return {
            ...post,
            isLiked: !post.isLiked,
            like_count: post.isLiked
              ? post.like_count - 1
              : post.like_count + 1,
          };
        }
        return post;
      });

      setFilteredPosts(updatedPosts);
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const filterMyPosts = (posts) => {
    if (isMineOnly) {
      setFilteredPosts(
        posts.filter((post) => post.author._id === userInfo._id),
      );
    } else {
      setFilteredPosts(posts);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [sort]);

  useEffect(() => {
    filterMyPosts(posts);
  }, [isMineOnly]);

  return (
    <S.QNAWrap>
      <Header
        typeLeft={'TEXT'}
        typeCenter={'SEARCH'}
        typeRight={'SEARCH'}
        textLeft={'개발Q&A'}
        rightOnClickEvent={handleSearchClick}
        inputChangeEvent={handleSearchKeywordChange}
        handleKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearchClick();
          }
        }}
      />
      <S.FilterBar>
        <S.ButtonWrap>
          <BasicButton
            text="최근 등록 순"
            textStyle={{
              font: CS.font.labelSmall,
              padding: '4px',
              marginRight: '4px',
              width: '100%',
            }}
            existText={false}
            iconDirection={'left'}
            children={
              <FaCircle
                size={12}
                color={
                  sort === sortType.NEW ? CS.color.positive : CS.color.secondary
                }
              />
            }
            handleOnClickButton={() => handleSortClick(sortType.NEW)}
          />
          <BasicButton
            text="답변 많은 순"
            textStyle={{
              font: CS.font.labelSmall,
              padding: '4px',
              width: '100%',
            }}
            existText={false}
            iconDirection={'left'}
            children={
              <FaCircle
                size={12}
                color={
                  sort === sortType.COMMENT
                    ? CS.color.positive
                    : CS.color.secondary
                }
              />
            }
            handleOnClickButton={() => handleSortClick(sortType.COMMENT)}
          />
        </S.ButtonWrap>
        <CheckBox
          text={'내 질문만 보기'}
          textStyle={{
            color: CS.color.contentSecondary,
            font: CS.font.labelSmall,
          }}
          style={{
            padding: '4px',
            justifyContent: 'flex-end',
            margin: 0,
          }}
          onChange={handleCheckBoxChange}
        />
      </S.FilterBar>
      <S.PostList>
        {filteredPosts.map((post, index) => (
          <S.PostWrap key={index}>
            <Post
              key={index}
              category={category}
              src={
                post.author.profile_url === ''
                  ? '/assets/img/elice_icon.png'
                  : post.author.profile_url
              }
              username={post.author.name}
              rate={post.author.roles}
              createdAt={post.createdAt}
              title={post.title}
              content={post.content}
              contentLength={'LONG'}
              existFollowBtn={post.author._id !== userInfo._id}
              isFollow={post.isFollowing}
              existMoreBtn={post.author._id === userInfo._id}
              isHot={post.isPopular}
              isLike={post.isLiked}
              likes={post.like_count}
              view={post.view_count}
              comments={post.commentCount}
              handleOnClickPost={() =>
                navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
              }
              // handleOnClickProfile={{}}
              handleOnClickFollow={() => handleFollowClick(post)}
              handleOnClickDots={() => openModal(post._id)}
              handleOnClickLikeBtn={() => handleLikeClick(post)}
              imgSrc={SERVER_URL + post.image_url}
              view={post.view_count}
            />
          </S.PostWrap>
        ))}
        {isMoreModalOpen && (
          <BasicModal
            closeModal={closeModal}
            children={
              <>
                <div style={{ paddingTop: '12px' }}>
                  <BasicButton
                    text="수정"
                    textStyle={{ padding: '12px' }}
                    handleOnClickButton={editPost}
                  />
                  <BasicButton
                    text="삭제"
                    textStyle={{ padding: '12px' }}
                    handleOnClickButton={deletePost}
                  />
                </div>
              </>
            }
          />
        )}
      </S.PostList>
      <WriteButton />
    </S.QNAWrap>
  );
};

export default QNA;
