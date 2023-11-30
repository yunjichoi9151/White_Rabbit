import { api } from '../index';

export const followApi = {
  // 팔로우 등록
  postFollow: (followId) => api.post(`/users/followings/${followId}`),

  // 팔로우 삭제
  deleteFollow: (userId) => api.delete(`/users/followings/${userId}`),

  // 팔로우 삭제(By UserId)
  deleteFollowById: (userId) => api.delete(`/users/followings/id/${userId}`),
};
