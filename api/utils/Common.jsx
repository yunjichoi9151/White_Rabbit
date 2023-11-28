import { api } from '../index';

export const commonApi = {
  // 이미지 URL 생성 API
  postImage: (formData) => {
    return api.post('/image', formData, {
      headers: {
        'Content-Type': undefined,
      },
    });
  },
};
