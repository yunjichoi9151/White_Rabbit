import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import NavBar from '../../components/common/NavBar';
import BasicButton from '../../components/common/BasicButton';
import { FaFire } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FiSend } from 'react-icons/fi';
import Post from '../../components/board/Post';
import boardData from '../../test/board.json';
import userData from '../../test/user.json';
import { postApi } from '../../../api/utils/Post';

const Home = () => {
  const [active, setActive] = useState('all');
  // const posts = boardData.data.posts;
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const postList = async () => {
    try {
      const res = await postApi.getAllPosts();
      setPosts(res.data.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  const user = userData.data;
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
  }, []);

  useEffect(() => {
    const filtered = posts.filter((post) => {
      if (active === 'all') return true;
      // if (active === 'HOT') return post.isHot === true;
      return post.category === active;
    });
    setFilteredPosts(filtered);
  }, [posts, active]);

  return (
    <S.HomeWrap>
      <S.TopBtnWrap>
        {/* <BasicButton
          handleOnClickButton={() => handleClick('HOT')}
          existIcon={true}
          existText={true}
          text="인기"
          btnStyle={buttonStyle('HOT')}
          textStyle={{
            font: CS.font.labelSmall,
            color: active === 'HOT' ? CS.color.white : CS.color.accent,
          }}
        >
          <FaFire style={{ marginRight: '0.5rem' }} />
        </BasicButton> */}
        <BasicButton
          handleOnClickButton={() => handleClick('fb')}
          existIcon={true}
          existText={true}
          text="자유게시판"
          btnStyle={buttonStyle('fb')}
          textStyle={{
            font: CS.font.labelSmall,
            color: active === 'fb' ? CS.color.white : CS.color.accent,
          }}
        >
          <IoDocumentTextOutline style={{ marginRight: '0.5rem' }} />
        </BasicButton>
        <BasicButton
          handleOnClickButton={() => handleClick('review')}
          existIcon={true}
          existText={true}
          text="취업후기"
          btnStyle={buttonStyle('review')}
          textStyle={{
            font: CS.font.labelSmall,
            color: active === 'review' ? CS.color.white : CS.color.accent,
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
            src={
              user.profile_url === ''
                ? '/assets/img/elice_icon.png'
                : user.profile_url
            }
            likes={post.like_count}
            category={post.category}
            username={post.author}
            rate={user.roles}
            // isHot={post.isHot}
            createdAt={post.createdAt}
            contentLength="SHORT"
            comments={2}
            handleOnClickPost={() =>
              navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
            }
          />
        ))}
      </S.BoardWrap>
    </S.HomeWrap>
  );
};

export default Home;
