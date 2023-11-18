import React, { useState } from 'react';
import { RouterProvider, Routes } from 'react-router-dom';
import Post from './components/board/Post';
import router from './router/routes';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Post
        src={''}
        username={'Username'}
        rate={'레이서'}
        createdAt={'2023-11-18 23:21:00'}
        existMoreBtn={true}
        category={'자유게시판'}
        title={'제목 입니다.'}
        content={
          '본문 내용입니다. 본문 내용입니다. 본문 내용입니다. 본문 내용입니다. '
        }
        isHot={true}
        likes={123}
        replies={123}
      />
    </>
  );
};

export default App;
