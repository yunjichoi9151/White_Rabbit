import { api } from '../index';
// API 수정 필요
export const generationApi = {
  // 기수 추가
  postFollow: () => api.post(`/generations/${toUserId}`),

  // 기수 전체 조회
  getAllGenerations: () => api.get(`/generations`),

  // 기수 삭제
  deleteGeneration: (id) => api.delete(`/generations/${id}`),
};
