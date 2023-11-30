import { api } from '../index';

export const followApi = {
  // 팔로우 등록
  postFollow: (toUserId) => api.post(`/users/followings/${toUserId}`),

  // 팔로우 삭제(By UserId)
  deleteFollow: (userId) => api.delete(`/users/followings/id/${userId}`),
};
