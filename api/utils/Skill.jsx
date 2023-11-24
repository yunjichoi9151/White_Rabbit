import { api } from '../index';

export const skillApi = {
  // skill 추가
  postSkill: () => api.get('/skills'),

  // skill 추가
  getAllSkills: () => api.get('/skills'),

  // skill 추가
  delteSkill: () => api.get('/skills'),
};
