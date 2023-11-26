import React, { useEffect, useState } from 'react';
import { postApi } from '../../../api/utils/Post';
import BasicText from '../../components/common/BasicText';
import * as CS from '../../styles/CommonStyles';
import * as S from './style';
import Post from '../../components/board/Post';
import { commentApi } from '../../../api/utils/Comment';
import EmptyContent from '../EmptyContent';

function MyContent({ type, userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await postApi.getPostByUserId(userId);
        const _res = res.data.data.map((data) => data.post);
        setPosts(_res);
      } catch (error) {
        // alert('error: ' + error.response);
        //.data.message
        console.log('error: ', error.response.data.message);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await commentApi.getCommentsByUser(userId);
        const _res = res.data.data.map((data) => data.post);
        setPosts(_res);
      } catch (error) {
        // alert('error: ' + error.response);
        //.data.message
        console.log('error: ', error.response.data.message);
      }
    };

    if (type === 'content') {
      console.log('뭐야 시발');
      fetchPosts();
    } else {
      console.log('뭐노 시발');
      fetchComments();
    }
  }, []);

  return (
    <>
      {posts.length ? (
        <S.Container>
          <BasicText
            text={type === 'content' ? `게시물 ${posts.length}개` : '댓글 0개'}
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
            {posts?.map((post, index) => (
              <S.PostWrap>
                <Post
                  key={index}
                  category={[]}
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
      ) : (
        <EmptyContent type="reply" />
      )}
    </>
  );
}

export default MyContent;
