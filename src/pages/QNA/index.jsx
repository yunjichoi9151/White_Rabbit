import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import BasicButton from '../../components/common/BasicButton';
import WriteButton from '../../components/board/WriteButton';
import CheckBox from '../../components/common/CheckBox';
import BottomModal from '../../components/board/BottomModal';
import Post from '../../components/board/Post';
import { FaCircle } from 'react-icons/fa';
import { postApi } from '../../../api/utils/Post';
import { userApi } from '../../../api/utils/user';
import { SERVER_URL } from '../../../api';

const category = 'QNA';

const sortType = {
  NEW: 'new',
  COMMENT: 'comment',
};

const QNA = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState(sortType.NEW);
  const [isMineOnly, setIsMineOnly] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);
  const [clickedPostId, setClickedPostId] = useState('');

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
      const res = await postApi.getCategoryPostsByPage(
        category,
        searchKeyword,
        sort,
        page,
        4,
      );
      if (res.data.data.posts.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...res.data.data.posts]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setIsAllDataLoaded(true);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchClick = () => {
    setPosts([]);
    setPage(1);
    setIsAllDataLoaded(false);
    fetchPosts();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchKeyword.length !== 0) {
      handleSearchClick();
    }
  };

  const handleClearSearch = () => {
    setPosts([]);
    setPage(1);
    setIsAllDataLoaded(false);
    setSearchKeyword('');
  };

  const handleSortClick = (sortBy) => {
    setIsMineOnly(false);
    setPosts([]);
    setPage(1);
    setIsAllDataLoaded(false);
    setSearchKeyword('');
    setSort(sortBy);
  };

  const handleCheckBoxChange = (e) => {
    setIsMineOnly(e.target.checked);
  };

  const handleLikeClick = async (clickedPost) => {
    try {
      const res = await postApi.putLike(clickedPost._id);
      const updatedPosts = posts.map((post) => {
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

      setPosts(updatedPosts);
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  // modal
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

      setPosts((prevPosts) =>
        prevPosts.filter((post) => post._id !== clickedPostId),
      );
    } catch (error) {
      alert('게시글 삭제에 실패했습니다.');
    } finally {
      setIsMoreModalOpen(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (!isAllDataLoaded && searchKeyword === '') {
      fetchPosts();
    }
  }, [sort, searchKeyword, inView]);

  return (
    <S.QNAWrap>
      <Header
        typeLeft={'TEXT'}
        typeCenter={'SEARCH'}
        typeRight={'SEARCH'}
        textLeft={'개발Q&A'}
        existXIcon={searchKeyword !== ''}
        value={searchKeyword}
        rightOnClickEvent={handleSearchClick}
        rightXOnClickEvent={handleClearSearch}
        inputChangeEvent={handleSearchKeywordChange}
        handleKeyPress={handleKeyPress}
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
          checked={isMineOnly}
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
        {posts
          .filter((post) =>
            isMineOnly ? post.author._id === userInfo._id : true,
          )
          .map((post, index) => (
            <S.PostWrap key={index}>
              <Post
                key={`post-${index}`}
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
                existMoreBtn={post.author._id === userInfo._id}
                isHot={post.isPopular}
                isLike={post.isLiked}
                likes={post.like_count}
                view={post.view_count}
                comments={post.commentCount}
                handleOnClickPost={() =>
                  navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
                }
                handleOnClickProfile={() =>
                  navigate(
                    ROUTER_LINK.USERPAGE.path.replace(
                      ':userId',
                      post.author._id,
                    ),
                  )
                }
                handleOnClickDots={() => openModal(post._id)}
                handleOnClickLikeBtn={() => handleLikeClick(post)}
                imgSrc={SERVER_URL + post.image_url}
              />
            </S.PostWrap>
          ))}
        {posts.length > 0 && <div ref={ref} />}
      </S.PostList>
      {isMoreModalOpen && (
        <BottomModal
          onClose={closeModal}
          onEdit={editPost}
          onDelete={deletePost}
        />
      )}
      <WriteButton />
    </S.QNAWrap>
  );
};

export default QNA;
