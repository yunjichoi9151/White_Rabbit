import { api } from '../index';

export const postApi = {
  // 전체 게시물 조회 API
  getAllPosts: () => api.get('/posts'),

  // 카테고리별 게시물 조회 API
  getCategoryPosts: (category) => api.get(`/posts/categories/${category}`),

  // 좋아요 추가/취소 API
  putLike: (postId) => api.put(`/posts/${postId}/likes`),

  // 게시물별 좋아요 목록 조회 API
  getLikePosts: (postId) => api.get(`/posts/${postId}/likes`),
};
