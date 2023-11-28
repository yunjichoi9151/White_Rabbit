import { api } from '../index';

export const skillApi = {
  // skill 추가
  postSkill: () => api.post('/skills'),

  // skill 전체 조회
  getAllSkills: () => api.get('/skills'),

  // skill 삭제
  delteSkill: (id) => api.delete(`/skills/${id}`),
};
