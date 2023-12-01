import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ROUTER_LINK } from '../../router/routes';
import { SERVER_URL } from '../../../api';
import { postApi } from '../../../api/utils/Post';
import { userApi } from '../../../api/utils/user';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Post from '../../components/board/Post';
import Header from '../../components/common/Header';
import BasicText from '../../components/common/BasicText';
import BottomModal from '../../components/board/BottomModal';
import WriteButton from '../../components/board/WriteButton';
import BasicButton from '../../components/common/BasicButton';
import { FiSend } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

  // GET PostList(By Page)
  const postListByPage = async () => {
    if (!isAllDataLoaded) {
      try {
        const res = await postApi.getPostsByPage(page, 4);
        if (page !== 0 && res.data.data.posts.length === 0) {
          setIsAllDataLoaded(true);
        } else {
          setPosts([...posts, ...res.data.data.posts]);
          setPage((page) => page + 1);
        }
      } catch (error) {
        console.log('error: ', error);
      }
    }
  };

  // ONCLICK Active
  const [active, setActive] = useState('all');

  // CLICK Category Btn
  const handleClick = (category) => {
    if (active === category) {
      setActive('all');
    } else {
      setActive(category);
    }
  };

  // GET Popular PostList(By Page)
  const loadPopularPosts = async () => {
    if (!isAllDataLoaded) {
      try {
        const res = await postApi.getPopularPostsByPage(page, 4);
        if (page !== 0 && res.data.data.posts.length === 0) {
          setIsAllDataLoaded(true);
        } else {
          setPosts([...posts, ...res.data.data.posts]);
          setPage((page) => page + 1);
        }
      } catch (error) {
        console.log('error: ', error);
      }
    }
  };

  // GET Category Posts(By Page)
  const loadCategoryPosts = async (category) => {
    if (!isAllDataLoaded) {
      try {
        const res = await postApi.getCategoryPostsByPage(
          category,
          '',
          'new',
          page,
          4,
        );
        if (page !== 0 && res.data.data.posts.length === 0) {
          setIsAllDataLoaded(true);
        } else {
          setPosts([...posts, ...res.data.data.posts]);
          setPage((page) => page + 1);
        }
      } catch (error) {
        console.log('error: ', error);
      }
    }
  };

  // ADD/DELETE Post Like
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

  // GET UserInfo
  const [user, setUser] = useState({});

  const userInfo = async () => {
    try {
      const res = await userApi.getLoginUserInfo();
      setUser(res.data.data);
    } catch (error) {
      console.log('error: ', error);
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

  // ONCLICK Dots Btn(Post)
  const handleOnClickDots = (postId) => {
    setIsModalOpen(true);
    setTargetPostId(postId);
  };

  // ONCLICK Edit Btn(Post)
  const handleEdit = () => {
    setIsModalOpen(false);
    navigate(ROUTER_LINK.POSTEDIT.path.replace(':postId', targetPostId));
  };

  // ONCLICK Delete Btn(Post)
  const handleDelete = async () => {
    setIsModalOpen(false);
    try {
      await postApi.deletePost(targetPostId);
      setPosts(posts.filter((post) => post._id !== targetPostId));
      navigate(ROUTER_LINK.HOME.link);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  // SEARCH
  const [searchKeyword, setSearchKeyword] = useState('');
  const [nowSearch, setNowSearch] = useState(false);

  const searchPosts = async () => {
    if (!isAllDataLoaded) {
      try {
        const res = await postApi.getSearchPostByPage(searchKeyword, page, 4);
        if (page !== 0 && res.data.data.posts.length === 0) {
          setIsAllDataLoaded(true);
        } else {
          setPosts([...posts, ...res.data.data.posts]);
          setPage((page) => page + 1);
        }
      } catch (error) {
        console.log('error: ', error);
      }
    }
  };

  const handleSearchSubmit = () => {
    setNowSearch(true);
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchKeyword.length !== 0) {
      setNowSearch(true);
    }
  };

  const handleClearSearch = () => {
    setActive('all');
    setPosts([]);
    setPage(1);
    setNowSearch(false);
    setIsAllDataLoaded(false);
    setSearchKeyword('');
    postListByPage();
  };

  // Button Style
  const buttonStyle = (category) => ({
    backgroundColor: active === category ? CS.color.accent : CS.color.white,
    color: active === category ? CS.color.white : CS.color.accent,
    padding: '0.5rem 0.75rem',
    border: `1px solid ${CS.color.accent}`,
    marginRight: '0.5rem',
  });

  useEffect(() => {
    userInfo();
  }, []);

  useEffect(() => {
    setPosts([]);
    setPage(1);
    setNowSearch(false);
    setIsAllDataLoaded(false);
  }, [active]);

  useEffect(() => {
    setPosts([]);
    setPage(1);
    setIsAllDataLoaded(false);
  }, [nowSearch]);

  useEffect(() => {
    if (!nowSearch && inView && !isAllDataLoaded) {
      if (active === 'all') {
        postListByPage();
      } else if (active === 'POPULAR') {
        loadPopularPosts();
      } else {
        loadCategoryPosts(active);
      }
    }
  }, [inView, active, page]);

  useEffect(() => {
    if (nowSearch && inView && !isAllDataLoaded && searchKeyword !== '') {
      searchPosts();
    }
  }, [inView, page]);

  return (
    <S.HomeWrap>
      <Header
        typeLeft={'LOGO'}
        typeCenter={'SEARCH'}
        typeRight={'SEARCH'}
        existXIcon={searchKeyword !== ''}
        inputChangeEvent={handleSearchChange}
        rightOnClickEvent={handleSearchSubmit}
        rightXOnClickEvent={handleClearSearch}
        handleKeyPress={handleKeyPress}
        value={searchKeyword}
      />
      <S.TopWrap>
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
        <S.InfoTextWrap $active={active}>
          {active === 'POPULAR' && (
            <BasicText
              text="※ 최근 1주일 기준 좋아요를 일정 수 이상 받은 게시글입니다."
              style={{
                font: CS.font.labelXS,
                // marginTop: '3rem',
                height: '1rem',
              }}
            />
          )}
        </S.InfoTextWrap>
      </S.TopWrap>
      <S.BoardWrap $active={active}>
        {posts.map((post, index) => (
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
            handleOnClickProfile={() =>
              navigate(
                ROUTER_LINK.USERPAGE.path.replace(':userId', post.author._id),
              )
            }
            existMoreBtn={user._id === post.author._id ? true : false}
            handleOnClickLikeBtn={() => likeHandler(post._id)}
            handleOnClickDots={() => handleOnClickDots(post._id)}
            imgSrc={SERVER_URL + post.image_url}
            view={post.view_count}
            userId={post.author._id}
          />
        ))}
        <S.EmptyDiv ref={ref} />
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
