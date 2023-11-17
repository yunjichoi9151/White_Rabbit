import React, { useState, useEffect } from 'react';
import * as S from './style';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ProfileTag = ({
  name,
  rate,
  createdAt,
  existFollow,
  isFollow,
  existMore,
}) => {
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
        {/* to-do: profileImg 추가 */}
        <S.Container direction={'column'}>
          <BasicText text={name} font="var(--font-label-small)" />
          <S.Container direction={'row'}>
            <BasicText text={rate} font="var(--font-paragraph-small)" />
            <BasicText text={'･'} font="var(--font-paragraph-small)" />
            <BasicText text={timeAgo} font="var(--font-paragraph-small)" />
          </S.Container>
        </S.Container>
        {existFollow && (
          <S.Container width="55px" height="25px">
            {/* 
                to-do:
                - BasicButton 수정되면 style 관련 옵션 따로 구분해주기 
                - 추후 버튼 클릭 시 API 호출 및 팔로잉/팔로우 바뀌도록 구현 
            */}
            {isFollow ? (
              <BasicButton
                text="팔로잉"
                backgroundColor="var(--color-primary)"
                font="var(--font-label-small)"
                radius="4px"
                width="100%"
                height="100%"
              />
            ) : (
              <BasicButton
                text="팔로우"
                backgroundColor="var(--color-accent)"
                font="var(--font-label-small)"
                radius="4px"
                width="100%"
                height="100%"
              />
            )}
          </S.Container>
        )}
        {existMore && (
          <S.Container width="16px">
            <BsThreeDotsVertical
              size="16px"
              color="var(--color-content-tertiary)"
            />
          </S.Container>
        )}
      </S.Container>
    </>
  );
};

export default ProfileTag;
