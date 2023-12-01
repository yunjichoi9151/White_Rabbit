import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const SERVER_URL = 'http://kdt-sw-6-team07.elicecoding.com/';
// instance interceptors 활용한 로그인 작업

export const api = instance;
