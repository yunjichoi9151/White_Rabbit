import { api } from '../index';

export const followApi = {
  // 팔로우 등록
  postFollow: (toUserId) => api.post(`/users/followings/${toUserId}`),

  deleteFollow: (followId) => api.delete(`/users/followings/${followId}`),
};
