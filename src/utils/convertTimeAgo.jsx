import { Cookies } from 'react-cookie';

export const convertTimeAgo = (date) => {
  const createdDate = new Date(date);
  const currentDate = new Date();

  const timeDifference = currentDate - createdDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let timeAgoString = '';
  if (days > 0) {
    timeAgoString = `${days}일 전`;
  } else if (hours > 0) {
    timeAgoString = `${hours}시간 전`;
  } else if (minutes > 0) {
    timeAgoString = `${minutes}분 전`;
  } else {
    timeAgoString = '방금 전';
  }

  return timeAgoString;
};

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};
