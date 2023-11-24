import { api } from '../index';

export const userApi = {
  // 회원가입 API
  // 이메일 중복과 같은 주소이므로 message 기준으로 처리해야함
  signUp: (userData) => api.post('/users', userData),

  // 로그인 API
  login: (email, password) =>
    api.post('/users/login', { email: email, password: password }),

  // 정보조회(토큰) API
  getLoginUserInfo: () => api.get(`/users/`),

  // 정보조회(ID) API
  getUserInfoById: (userId) => api.get(`/users/${userId}`),

  // 유저 정보 수정(ID) API
  // 수정 가능한 정보 확인 필요
  modifyUserInfo: (userId, userData) => api.patch(`/users/${userId}`, userData),

  // 회원탈퇴 API
  deleteUser: (userId) => api.delete(`/users/${userId}`),

  // 비밀번호 재설정 이메일 입력 API
  resetPasswordEmail: (email) => api.post('/users/password', { email }),

  // 비밀번호 재설정 API
  resetPassword: (userData) => api.post('/users/password/reset', userData),

  //팔로우 전체 수 조회 API
  follow: (userId) => api.get(`users/${userId}/follow/number`),
};
