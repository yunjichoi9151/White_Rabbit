import { api } from '../index';

export const commentApi = {
  // 댓글 목록 조회(게시글별) API
  getCommentsByPost: (postId) => api.get(`/comments/boards/${postId}`),

  // 댓글 목록 조회(사용자별) API
  getCommentsByUser: (userId) => api.get(`/comments/users/${userId}/comments`),

  // 댓글 등록
  postComment: (postId, content) =>
    api.post(`/comments`, { post: postId, content: content }),

  // 댓글 수정
  modifyComment: (commentId, content) =>
    api.patch(`/comments/${commentId}`, { content }),

  // 댓글 삭제.
  deleteComment: (commentId) => api.delete(`/comments/${commentId}`),
};
