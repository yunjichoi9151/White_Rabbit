import { api } from '../index';

export const followApi = {
  // 팔로우 등록
  postFollow: (followId) => api.post(`/users/followings/${followId}`),

  // 팔로우 삭제(By UserId)
  deleteFollow: (userId) => api.delete(`/users/followings/id/${userId}`),
};
