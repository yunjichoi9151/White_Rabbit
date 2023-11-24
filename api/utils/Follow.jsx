import { api } from '../index';

export const followApi = {
  // 팔로우 등록
  postFollow: (fromUserId, toUserId) => {
    const requestData = {
      to: toUserId,
    };
    api.post(`/users/${fromUserId}/follow`, requestData);
  },

  deleteFollow: (fromUserId, toUserId) => {
    api.delete(`/users/${fromUserId}/follow?from=${toUserId}`);
  },
};
