import { api } from '../index';

export const followApi = {
  // 팔로우 등록
  postFollow: (followId) => api.post(`/users/followings/${followId}`),

  // 팔로우 삭제
  deleteFollow: (followId) => api.delete(`/users/followings/${followId}`),
};
