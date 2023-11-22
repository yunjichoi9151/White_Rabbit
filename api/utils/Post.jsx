import { api } from '../index';

export const postApi = {
  // 전체 게시물 조회 API
  getAllPosts: () => api.get('/boards'),

  // 전체 게시물 조회(페이징) API
  getPostsByPage: (page, pageSize) =>
    api.get(`/boards?page=${page}&pageSize=${pageSize}`),

  // 카테고리별 게시물 조회 API
  getCategoryPosts: (category) => api.get(`/boards/categories/${category}`),

  // 카테고리별 게시물 조회(페이징) API
  getCategoryPostsByPage: (category, page, pageSize) =>
    api.get(`/boards/categories/${category}?page=${page}&pageSize=${pageSize}`),

  // 인기 게시물 조회 API
  getPopularPosts: () => api.get('/boards/popular'),

  // 게시물 조회(게시물 id) API
  getPostByPostId: (postId) => api.get(`/boards/${postId}`),

  // 게시물 조회(유저 id) API
  getPostByUserId: (userId) => api.get(`/boards/users/${userId}`),

  // 게시물 수정 API
  modifyPost: (postId, post) => api.patch(`/boards/${postId}`, post),

  // 게시물 삭제 API
  deletePost: (postId) => api.delete(`/boards${postId}`),

  // 좋아요 추가/취소 API
  putLike: (postId) => api.put(`/boards/${postId}/likes`),

  // 게시물별 좋아요 목록 조회 API
  getLikePosts: (postId) => api.get(`/boards/${postId}/likes`),
};
