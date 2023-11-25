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

  const navigate = useNavigate();

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
      const res = await postApi.getCategoryPosts(category, sort);
      setPosts(res.data.data.posts);
      filterMyPosts(res.data.data.posts);
      console.log(res.data.data.posts);
    } catch (error) {
      console.log('error: ', error.response.data);
    }
  };

  const handleSortClick = (sortBy) => {
    setSort(sortBy);
  };

  const handleCheckBoxChange = (e) => {
    setIsMineOnly(e.target.checked);
  };

  const handleFollowClick = async (clickedPost) => {
    try {
      // 추가/삭제 API 수정 필요
      if (clickedPost.isFollowing) {
        await followApi.deleteFollow(clickedPost.followList._id);
      } else {
        await followApi.postFollow(clickedPost.author._id);
      }
      const updatedPosts = filteredPosts.map((post) => {
        if (post._id === clickedPost._id) {
          return { ...post, isFollowing: !post.isFollowing };
        }
        return post;
      });

      setFilteredPosts(updatedPosts);
    } catch (error) {
      console.log('error: ', error.response.data);
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
        {/* <BasicModal children={'완료되었습니다.'} /> */}
        {filteredPosts.map((post, index) => (
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
              contentLength={'LONG'}
              existFollowBtn={post.author._id !== userInfo._id}
              isFollow={post.isFollowing}
              existMoreBtn={post.author._id === userInfo._id}
              // isHot={post.isPopular}
              isLike={post.isLiked}
              likes={post.like_count}
              comments={post.commentCount}
              handleOnClickPost={() =>
                navigate(ROUTER_LINK.DETAIL.path.replace(':postId', post._id))
              }
              // handleOnClickProfile={{}}
              handleOnClickFollow={() => handleFollowClick(post)}
              // handleOnClickDots={{}}
              handleOnClickLikeBtn={() => handleLikeClick(post)}
            />
          </S.PostWrap>
        ))}
        <WriteButton />
      </S.PostList>
    </S.QNAWrap>
  );
};

export default QNA;
