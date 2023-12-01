import React, { useEffect, useState } from 'react';
import { ROUTER_LINK } from '../../router/routes';
import { Link } from 'react-router-dom';
import { postApi } from '../../../api/utils/Post';
import { commentApi } from '../../../api/utils/comment';
import * as CS from '../../styles/CommonStyles';
import * as S from './style';
import Post from '../../components/board/Post';
import EmptyContent from '../EmptyContent';
import BasicText from '../../components/common/BasicText';

function MyContent({ type, userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await postApi.getPostByUserId(userId);
        const _res = res.data.data.map((data) => data.post);
        setPosts(_res);
      } catch (error) {
        console.log('error: ', error.response.data.message);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await commentApi.getCommentsByUser(userId);
        setPosts(res.data.data);
      } catch (error) {
        console.log('error: ', error.response.data.message);
      }
    };

    if (type === 'content') {
      fetchPosts();
    } else {
      fetchComments();
    }
  }, []);

  return (
    <>
      {posts?.length ? (
        <S.Container>
          <BasicText
            text={
              type === 'content'
                ? `게시물 ${posts.length}개`
                : `댓글 ${posts.length}개`
            }
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
              <Link to={`${ROUTER_LINK.DETAIL.link}/${post._id}`}>
                <S.PostWrap>
                  <Post
                    key={index}
                    category={post.category}
                    src={''}
                    username={post.author.name}
                    rate={post.author.roles}
                    createdAt={post.createdAt}
                    title={post.title}
                    content={post.content}
                    existFollowBtn={false}
                    isFollow={false}
                    existMoreBtn={false}
                    contentLength="LONG"
                    isHot={post.isPopular}
                    isLike={false}
                    likes={0}
                    comments={post.commentCount}
                  />
                </S.PostWrap>
              </Link>
            ))}
          </S.PostList>
        </S.Container>
      ) : (
        <EmptyContent type={type} />
      )}
    </>
  );
}

export default MyContent;
