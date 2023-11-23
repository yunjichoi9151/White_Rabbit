import React, { useState, useEffect } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import NavBar from '../../components/common/NavBar';
import Header from '../../components/common/Header';
import BasicButton from '../../components/common/BasicButton';
import WriteButton from '../../components/board/WriteButton';
import Post from '../../components/board/Post';
import { FaCircle } from 'react-icons/fa';
import { postApi } from '../../../api/utils/Post';

const CategoryText = {
  PROJECT: '프로젝트',
  STUDY: '스터디',
};

const Recruitment = () => {
  const [category, setCategory] = useState('PROJECT');
  const [posts, setPosts] = useState([]);

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await postApi.getCategoryPosts(category);
        setPosts(res.data.data.posts);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchPosts();
  }, [category]);

  return (
    <S.RecruitmentWrap>
      <Header
        typeLeft={'TEXT'}
        typeCenter={'SEARCH'}
        typeRight={'SEARCH'}
        textLeft={`${CategoryText[category]} 모집`}
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
              src={''}
              username={'post'}
              rate="레이서"
              createdAt={post.createdAt}
              title={post.title}
              content={post.content}
              existFollowBtn={post.author}
              isFollow={false}
              existMoreBtn={false}
              contentLength="LONG"
              isHot={post.isPopular}
              isLike={false}
              likes={0}
              comments={post.commentCount}
            />
          </S.PostWrap>
        ))}
      </S.PostList>
      <WriteButton />
      <NavBar />
    </S.RecruitmentWrap>
  );
};

export default Recruitment;
