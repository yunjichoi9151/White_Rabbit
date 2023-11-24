import React, { useEffect, useState } from 'react';
import { postApi } from '../../../api/utils/Post';
import { ROUTER_LINK } from '../../router/routes';
import { Navigate } from 'react-router';
import Post from '../../components/board/Post';
import BasicText from '../../components/common/BasicText';
import * as CS from '../../styles/CommonStyles';
import * as S from './style';

function MyContent({ type }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await postApi.getAllPosts();
        setPosts(res.data.data.posts);
        console.log(res.data.data.posts);
      } catch (error) {
        // alert('error: ' + error.response);
        //.data.message
        console.log('error: ', error.response.data.message);
      }
    };

    fetchPosts();
  }, []);

  // users._id === board.author

  return (
    <>
      <S.Container>
        <BasicText
          text={type === 'content' ? `게시물 ${Post.length}개` : '댓글 0개'}
          style={{
            background: CS.color.white,
            height: 40,
            borderRadius: 0,
            font: CS.font.labelSmall,
            color: CS.color.contentTertiary,
            paddingLeft: 28,
          }}
        />
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
      </S.Container>
    </>
  );
}

export default MyContent;
