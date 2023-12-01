import { api } from '../index';

export const postApi = {
  // 전체 게시물 조회 API
  getAllPosts: () => api.get('/boards'),

  // 전체 게시물 조회(페이징) API
  getPostsByPage: (page, pageSize) =>
    api.get(`/boards?page=${page}&pageSize=${pageSize}`),

  // 카테고리별 게시물 조회 API(ALL)
  getCategoryAllPosts: (category) => api.get(`/boards/categories/${category}`),

  // 카테고리별 게시물 조회 API(sort)
  getCategoryPosts: (category, keyword, sortBy) =>
    api.get(
      `/boards/categories/${category}?keyword=${keyword}&sortBy=${sortBy}`,
    ),

  // 카테고리별 게시물 조회(페이징) API
  getCategoryPostsByPage: (category, keyword, sortBy, page, pageSize) =>
    api.get(
      `/boards/categories/${category}?keyword=${keyword}&sortBy=${sortBy}&page=${page}&pageSize=${pageSize}`,
    ),

  // 인기 게시물 조회 API
  getPopularPosts: () => api.get('/boards/popular'),

  // 인기 게시물 조회(페이징) API
  getPopularPostsByPage: (page, pageSize) =>
    api.get(`/boards/popular?page=${page}&pageSize=${pageSize}`),

  // 게시물 조회(게시물 id) API
  getPostByPostId: (postId) => api.get(`/boards/${postId}`),

  // 게시물 조회(유저 id) API
  getPostByUserId: (userId) => api.get(`/boards/users/${userId}`),

  // 게시물 등록 API
  newPost: (title, content, category, image_url) =>
    api.post(`/boards`, { title, content, category, image_url }),

  // 게시물 수정 API
  modifyPost: (postId, post) => api.patch(`/boards/${postId}`, post),

  // 게시물 삭제 API
  deletePost: (postId) => api.delete(`/boards/${postId}`),

  // 좋아요 추가/취소 API
  putLike: (postId) => api.put(`/boards/${postId}/likes`),

  // 게시물별 좋아요 목록 조회 API
  getLikePosts: (postId) => api.get(`/boards/${postId}/likes`),

  // 검색 결과 조회 API
  getSearchPost: (keyword) => api.get(`/boards?keyword=${keyword}`),

  // 검색 결과 조회(페이징) API
  getSearchPostByPage: (keyword, page, pageSize) =>
    api.get(`/boards?keyword=${keyword}&page=${page}&pageSize=${pageSize}`),

  // // 이미지 등록 API
  addImage: (image) =>
    api.post(`/image`, image, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
};
