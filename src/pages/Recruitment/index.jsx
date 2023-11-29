import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import NavBar from '../../components/common/NavBar';
import Header from '../../components/common/Header';
import BasicButton from '../../components/common/BasicButton';
import WriteButton from '../../components/board/WriteButton';
import BasicModal from '../../components/common/BasicModal';
import Post from '../../components/board/Post';
import { FaCircle } from 'react-icons/fa';
import { postApi } from '../../../api/utils/Post';
import { userApi } from '../../../api/utils/user';
import { followApi } from '../../../api/utils/Follow';

const CategoryText = {
  PROJECT: '프로젝트',
  STUDY: '스터디',
};

const Recruitment = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('PROJECT');
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
      const res = await postApi.getCategoryPosts(category, searchKeyword);
      setPosts(res.data.data.posts);
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

  const handleCategoryClick = (category) => {
    setCategory(category);
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

      const updatedPosts = posts.map((post) => {
        if (post._id === clickedPost._id) {
          return {
            ...post,
            isFollowing: !post.isFollowing,
            followList: { _id: followId },
          };
        }
        return post;
      });

      setPosts(updatedPosts);
    } catch (error) {
      console.log('error: ', error);
    }
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
    fetchPosts();
  }, [category]);

  return (
    <S.RecruitmentWrap>
      <Header
        typeLeft={'TEXT'}
        typeCenter={'SEARCH'}
        typeRight={'SEARCH'}
        textLeft={`${CategoryText[category]} 모집`}
        rightOnClickEvent={handleSearchClick}
        inputChangeEvent={handleSearchKeywordChange}
        handleKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearchClick();
          }
        }}
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
          <S.PostWrap>
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
              existFollowBtn={post.author._id !== userInfo._id}
              isFollow={post.isFollowing}
              existMoreBtn={post.author._id === userInfo._id}
              contentLength={'LONG'}
              // isHot={post.isPopular}
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
            />
          </S.PostWrap>
        ))}
      </S.PostList>
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
      <WriteButton />
    </S.RecruitmentWrap>
  );
};

export default Recruitment;
