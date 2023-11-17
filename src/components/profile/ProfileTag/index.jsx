import React, { useState, useEffect } from 'react';
import * as S from './style';
import BasicText from '../../common/BasicText';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ProfileTag = ({ name, rate, createdAt }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const createdDate = new Date(createdAt);
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

    setTimeAgo(timeAgoString);
  }, [createdAt]);

  return (
    <>
      <S.Container direction={'row'}>
        <S.Container direction={'column'}>
          <BasicText text={name} font="var(--font-label-small)" />
          <S.Container direction={'row'}>
            <BasicText text={rate} font="var(--font-paragraph-small)" />
            <BasicText text={'･'} font="var(--font-paragraph-small)" />
            <BasicText text={timeAgo} font="var(--font-paragraph-small)" />
          </S.Container>
        </S.Container>
        <BsThreeDotsVertical size="16" color="var(--color-content-tertiary)" />
      </S.Container>
    </>
  );
};

export default ProfileTag;
