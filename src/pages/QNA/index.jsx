import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_LINK } from '../../router/routes';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import BasicButton from '../../components/common/BasicButton';
import WriteButton from '../../components/board/WriteButton';
import CheckBox from '../../components/common/CheckBox';
import Post from '../../components/board/Post';
import { FaCircle } from 'react-icons/fa';
import { postApi } from '../../../api/utils/Post';
import { userApi } from '../../../api/utils/user';

const QNA = () => {
  const category = 'QNA';
  const [userInfo, setUserInfo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('latest'); // 필터링 추가해야 됨
  const [filteredPosts, setFilteredPosts] = useState([]);

  const navigate = useNavigate();

  const handleFilterButtonClick = (newFilter) => {
    setFilter(newFilter);
  };

  const handleCheckBoxChange = (e) => {
    if (e.target.checked) {
      setFilteredPosts(posts.filter((post) => post.author === userInfo._id));
    } else {
      filterAndSetPosts(filter);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const res = await userApi.getLoginUserInfo();
      setUserInfo(res.data.data);
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await postApi.getCategoryPosts(category);
      setPosts(res.data.data.posts);
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const filterAndSetPosts = (currentFilter) => {
    if (currentFilter === 'latest') {
      setFilteredPosts(
        posts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
      );
    } else if (currentFilter === 'reply') {
      setFilteredPosts(
        posts.slice().sort((a, b) => b.commentCount - a.commentCount),
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
  }, []);

  useEffect(() => {
    filterAndSetPosts(filter);
  }, [filter, posts]);

  return (
    <S.QNAWrap>
      <Header
        typeLeft={'TEXT'}
        typeCenter={'SEARCH'}
        typeRight={'SEARCH'}
        textLeft={'개발Q&A'}
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
                  filter === 'latest' ? CS.color.positive : CS.color.secondary
                }
              />
            }
            handleOnClickButton={() => handleFilterButtonClick('latest')}
          />
          <BasicButton
            text="댓글 많은 순"
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
                  filter === 'reply' ? CS.color.positive : CS.color.secondary
                }
              />
            }
            handleOnClickButton={() => handleFilterButtonClick('reply')}
          />
        </S.ButtonWrap>
        <CheckBox
          text={'내 질문만 보기'}
          textColor={CS.color.contentSecondary}
          style={{ padding: '4px', justifyContent: 'flex-end', margin: 0 }}
          onChange={handleCheckBoxChange}
        />
      </S.FilterBar>
      <S.PostList>
        {filteredPosts.map((post, index) => (
          <S.PostWrap>
            <Post
              key={index}
              category={category}
              src={''} // author
              username={'post'} // author
              rate={'레이서'} // author
              createdAt={post.createdAt}
              title={post.title}
              content={post.content}
              existFollowBtn={post.author !== userInfo._id}
              isFollow={false} // follow 했는지 여부
              existMoreBtn={post.author === userInfo._id}
              contentLength={'LONG'}
              isHot={post.isPopular}
              isLike={false} // 좋아요 했는지 여부
              likes={post.like_count}
              comments={post.commentCount}
              handleOnClickPost={() =>
                navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
              }
            />
          </S.PostWrap>
        ))}
        <WriteButton />
      </S.PostList>
    </S.QNAWrap>
  );
};

export default QNA;
