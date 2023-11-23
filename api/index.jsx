import axios from 'axios';

const BASE_URL = 'http://kdt-sw-6-team07.elicecoding.com/api/v1';
// const BASE_URL = 'http://localhost:8000/api/v1';
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// instance interceptors 활용한 로그인 작업

export const api = instance;
