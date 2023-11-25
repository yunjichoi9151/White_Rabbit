import { api } from '../index';

export const followApi = {
  // 팔로우 등록
  postFollow: (toUserId) => {
    api.post(`/users/follow/${toUserId}`);
  },

  deleteFollow: (followId) => {
    api.delete(`/users/follow/${followId}`);
  },
};
