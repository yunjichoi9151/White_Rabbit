import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import BasicButton from '../../components/common/BasicButton';
import WriteButton from '../../components/board/WriteButton';
import CheckBox from '../../components/common/CheckBox';
import Post from '../../components/board/Post';
import { FaCircle } from 'react-icons/fa';
import { postApi } from '../../../api/utils/Post';

const QNA = () => {
  const category = 'QNA';
  const [selectedFilter, setSelectedFilter] = useState('latest');
  const [posts, setPosts] = useState([]);

  const handleFilterButtonClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleCheckBoxChange = (e) => {
    if (e.target.checked) {
      console.log('체크되었습니다.');
    } else {
      console.log('해제되었습니다.');
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await postApi.getCategoryPosts(category);
        setPosts(res.data.data.posts);
        console.log(res.data.data.posts);
      } catch (error) {
        console.log('error: ', error.response.data);
      }
    };

    fetchPosts();
  }, []);

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
                  selectedFilter === 'latest'
                    ? CS.color.positive
                    : CS.color.secondary
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
                  selectedFilter === 'reply'
                    ? CS.color.positive
                    : CS.color.secondary
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
        <WriteButton />
      </S.PostList>
    </S.QNAWrap>
  );
};

export default QNA;
