import React, { useState, useEffect } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import ProfileImg from '../../common/ProfileImg';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ProfileSize = {
  1: '48px',
  2: '72px',
  3: '128px',
};

const ProfileTag = ({
  src,
  username,
  rate,
  existGeneration = false,
  genType,
  genNum,
  existTimeAgo = false,
  createdAt,
  existFollow = false,
  followers,
  followings,
  existFollowBtn = false,
  isFollow,
  existMoreBtn = false,
  profileSize,
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
        <ProfileImg src={src} style={{ width: ProfileSize[profileSize] }} />
        <S.Container direction={'column'} padding={'0 10px'}>
          <BasicText text={username} style={{ font: CS.font.labelSmall }} />
          {existGeneration && (
            <BasicText
              text={`${genType} ${genNum}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          )}
          {existTimeAgo ? (
            <BasicText
              text={`${rate} ･ ${timeAgo}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          ) : (
            <BasicText text={rate} style={{ font: CS.font.paragraphSmall }} />
          )}
          {existFollow && (
            <BasicText
              text={`팔로워 ${followers} 팔로잉 ${followings}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          )}
        </S.Container>
        <S.Container width="70px" height="35px">
          {existFollowBtn &&
            (isFollow ? (
              <BasicButton
                text="팔로잉"
                btnStyle={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '4px',
                  backgroundColor: CS.color.accent,
                }}
                textStyle={{
                  font: CS.font.labelSmall,
                  color: CS.color.white,
                }}
              />
            ) : (
              <BasicButton
                text="팔로우"
                btnStyle={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '4px',
                  backgroundColor: CS.color.primary,
                }}
                textStyle={{
                  font: CS.font.labelSmall,
                  color: CS.color.white,
                }}
              />
            ))}
        </S.Container>
        {existMoreBtn && (
          <S.Container width="16px">
            <BsThreeDotsVertical size="16px" color={CS.color.contentTertiary} />
          </S.Container>
        )}
      </S.Container>
    </>
  );
};

export default ProfileTag;
