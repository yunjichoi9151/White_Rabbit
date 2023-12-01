import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import BasicButton from '../../components/common/BasicButton';
import WriteButton from '../../components/board/WriteButton';
import BottomModal from '../../components/board/BottomModal';
import Post from '../../components/board/Post';
import { FaCircle } from 'react-icons/fa';
import { postApi } from '../../../api/utils/Post';
import { userApi } from '../../../api/utils/user';
import { SERVER_URL } from '../../../api';

const CategoryText = {
  PROJECT: '프로젝트',
  STUDY: '스터디',
};

const Recruitment = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [category, setCategory] = useState('PROJECT');
  const [posts, setPosts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

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
        '',
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

  const handleCategoryClick = (category) => {
    setPosts([]);
    setPage(1);
    setIsAllDataLoaded(false);
    setSearchKeyword('');
    setCategory(category);
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
      console.log('error: ', error);
    }
  };

  // modal
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
  const [clickedPostId, setClickedPostId] = useState('');

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
  }, [category, searchKeyword, inView]);

  return (
    <S.RecruitmentWrap>
      <Header
        typeLeft={'TEXT'}
        typeCenter={'SEARCH'}
        typeRight={'SEARCH'}
        textLeft={`${CategoryText[category]} 모집`}
        existXIcon={searchKeyword !== ''}
        value={searchKeyword}
        rightOnClickEvent={handleSearchClick}
        rightXOnClickEvent={handleClearSearch}
        inputChangeEvent={handleSearchKeywordChange}
        handleKeyPress={handleKeyPress}
      />
      <S.FilterBar>
        <BasicButton
          text="프로젝트"
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
                category === 'PROJECT' ? CS.color.positive : CS.color.secondary
              }
            />
          }
          handleOnClickButton={() => handleCategoryClick('PROJECT')}
        />
        <BasicButton
          text="스터디"
          textStyle={{
            font: CS.font.labelSmall,
            padding: '4px',
          }}
          existText={false}
          iconDirection={'left'}
          children={
            <FaCircle
              size={12}
              color={
                category === 'STUDY' ? CS.color.positive : CS.color.secondary
              }
            />
          }
          handleOnClickButton={() => handleCategoryClick('STUDY')}
        />
      </S.FilterBar>
      <S.PostList>
        {posts.map((post, index) => (
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
              existMoreBtn={post.author._id === userInfo._id}
              contentLength={'LONG'}
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
                  ROUTER_LINK.USERPAGE.path.replace(':userId', post.author._id),
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
    </S.RecruitmentWrap>
  );
};

export default Recruitment;
