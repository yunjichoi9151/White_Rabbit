import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import BasicButton from '../../components/common/BasicButton';
import { FaFire } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FiSend } from 'react-icons/fi';
import Post from '../../components/board/Post';
import userData from '../../test/user.json';
import { postApi } from '../../../api/utils/Post';
import Header from '../../components/common/Header';
import WriteButton from '../../components/board/WriteButton';
import { userApi } from '../../../api/utils/user';
import BasicModal from '../../components/common/BasicModal';
import BottomModal from '../../components/board/BottomModal';

const Home = () => {
  const [active, setActive] = useState('all');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const postList = async () => {
    try {
      const res = await postApi.getAllPosts();
      const filteredPosts = res.data.data.posts;

      const postsWithDefaultImage = await Promise.all(
        filteredPosts.map(async (post) => {
          try {
            await new Promise((resolve, reject) => {
              const img = new Image();
              img.src = post.author.profile_url;
              img.onload = resolve;
              img.onerror = reject;
            });
            return post;
          } catch (error) {
            return {
              ...post,
              author: {
                ...post.author,
                profile_url: '/assets/img/elice_icon.png',
              },
            };
          }
        }),
      );

      setPosts(postsWithDefaultImage);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const likeHandler = async (postId) => {
    try {
      await postApi.putLike(postId);
      setPosts(
        posts.map((post) => {
          if (post._id === postId) {
            return {
              ...post,
              like_count: post.isLiked
                ? post.like_count - 1
                : post.like_count + 1,
              isLiked: !post.isLiked,
            };
          }
          return post;
        }),
      );
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const [user, setUser] = useState({});

  const userInfo = async () => {
    try {
      const res = await userApi.getLoginUserInfo();
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetPostId, setTargetPostId] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOnClickDots = (postId) => {
    setIsModalOpen(true);
    setTargetPostId(postId);
  };

  const handleEdit = () => {
    setIsModalOpen(false);
    // navigate(`/post/${targetPostId}/edit`);
    navigate(ROUTER_LINK.POSTEDIT.path.replace(':postId', targetPostId));
  };

  const handleDelete = async () => {
    setIsModalOpen(false);
    try {
      await postApi.deletePost(targetPostId);
      setPosts(posts.filter((post) => post._id !== targetPostId));
      // navigate('/home');
      navigate(ROUTER_LINK.HOME.link);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const navigate = useNavigate();

  const handleClick = (category) => {
    setActive(active === category ? 'all' : category);
  };

  const buttonStyle = (category) => ({
    backgroundColor: active === category ? CS.color.accent : CS.color.white,
    color: active === category ? CS.color.white : CS.color.accent,
    padding: '0.5rem 0.75rem',
    border: `1px solid ${CS.color.accent}`,
    marginRight: '0.5rem',
  });

  useEffect(() => {
    postList();
    userInfo();
  }, [active]);

  useEffect(() => {
    const filtered = posts.filter((post) => {
      if (active === 'all') return true;
      if (active === 'POPULAR') return post.isPopular === true;
      return post.category === active;
    });
    setFilteredPosts(filtered);
  }, [posts, active]);

  return (
    <S.HomeWrap>
      <Header typeLeft={'LOGO'} typeCenter={'SEARCH'} typeRight={'SEARCH'} />
      <S.TopBtnWrap>
        <BasicButton
          handleOnClickButton={() => handleClick('POPULAR')}
          existIcon={true}
          existText={true}
          text="인기"
          btnStyle={buttonStyle('POPULAR')}
          textStyle={{
            font: CS.font.labelSmall,
            color: active === 'POPULAR' ? CS.color.white : CS.color.accent,
          }}
        >
          <FaFire style={{ marginRight: '0.5rem' }} />
        </BasicButton>
        <BasicButton
          handleOnClickButton={() => handleClick('BOARD')}
          existIcon={true}
          existText={true}
          text="자유게시판"
          btnStyle={buttonStyle('BOARD')}
          textStyle={{
            font: CS.font.labelSmall,
            color: active === 'BOARD' ? CS.color.white : CS.color.accent,
          }}
        >
          <IoDocumentTextOutline style={{ marginRight: '0.5rem' }} />
        </BasicButton>
        <BasicButton
          handleOnClickButton={() => handleClick('REVIEW')}
          existIcon={true}
          existText={true}
          text="취업후기"
          btnStyle={buttonStyle('REVIEW')}
          textStyle={{
            font: CS.font.labelSmall,
            color: active === 'REVIEW' ? CS.color.white : CS.color.accent,
          }}
        >
          <FiSend style={{ marginRight: '0.5rem' }} />
        </BasicButton>
      </S.TopBtnWrap>
      <S.BoardWrap>
        {filteredPosts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            content={post.content}
            src={post.author.profile_url || '/assets/img/elice_icon.png'}
            likes={post.like_count}
            isLike={post.isLiked}
            category={post.category}
            username={post.author.name}
            rate={post.author.roles}
            isHot={post.isPopular}
            createdAt={post.createdAt}
            contentLength="SHORT"
            comments={post.commentCount}
            handleOnClickPost={() =>
              navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
            }
            existFollowBtn={user._id === post.author._id ? false : true}
            existMoreBtn={user._id === post.author._id ? true : false}
            handleOnClickLikeBtn={() => likeHandler(post._id)}
            handleOnClickDots={() => handleOnClickDots(post._id)}
            isFollow={post.isFollowing}
            imgSrc={'http://localhost:5000' + post.image_url}
            view={post.view_count}
          />
        ))}
      </S.BoardWrap>
      <WriteButton />
      {isModalOpen && (
        <BottomModal
          onClose={closeModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </S.HomeWrap>
  );
};

export default Home;
