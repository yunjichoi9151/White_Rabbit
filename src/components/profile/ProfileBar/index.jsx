import React, { useState, useEffect } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import ProfileImg from '../../common/ProfileImg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { convertTimeAgo } from '../../../utils/convertTimeAgo';
import { SERVER_URL } from '../../../../api';

const ProfileImgSize = {
  1: '40px',
  2: '72px',
  3: '128px',
};

const userLabelText = {
  USER: '레이서',
  ADMIN: '관리자',
  COACH: '코치',
};

const ProfileBar = ({
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
  handleOnClickBar,
  handleOnClickFollow,
  handleOnClickDots,
  style,
  onClickFollower,
  onClickFollowing,
  followId,
}) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    setTimeAgo(convertTimeAgo(createdAt));
  }, [createdAt]);

  return (
    <>
      <S.Wrapper style={style}>
        <ProfileImg
          src={SERVER_URL + src}
          style={{ width: ProfileImgSize[profileSize] }}
          onClickEvent={handleOnClickBar}
        />
        <S.InfoBox onClick={handleOnClickBar}>
          <BasicText text={username} style={{ font: CS.font.labelSmall }} />
          {existGeneration && (
            <BasicText
              text={`${genType} ${genNum}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          )}
          {existTimeAgo ? (
            <BasicText
              text={`${userLabelText[rate]} ･ ${timeAgo}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          ) : (
            <BasicText text={rate} style={{ font: CS.font.paragraphSmall }} />
          )}
          {existFollow && (
            <div style={{ display: 'flex' }}>
              <BasicText
                onClick={onClickFollower}
                text={`팔로워 ${followers}`}
                style={{ font: CS.font.paragraphSmall, cursor: 'pointer' }}
              />

              <BasicText
                onClick={onClickFollowing}
                text={`팔로잉 ${followings}`}
                style={{ font: CS.font.paragraphSmall, cursor: 'pointer' }}
              />
            </div>
          )}
        </S.InfoBox>
        <div style={{ width: '70px' }}>
          {existFollowBtn && (
            <BasicButton
              text={isFollow ? '팔로잉' : '팔로우'}
              handleOnClickButton={handleOnClickFollow}
              btnStyle={{
                width: '70px',
                height: '35px',
                borderRadius: '4px',
                backgroundColor: isFollow ? CS.color.primary : CS.color.accent,
              }}
              textStyle={{
                font: CS.font.labelSmall,
                color: CS.color.white,
              }}
            />
          )}
          {existMoreBtn && (
            <BasicButton
              existIcon={true}
              existText={false}
              handleOnClickButton={handleOnClickDots}
              btnStyle={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <BsThreeDotsVertical
                size="24px"
                color={CS.color.contentTertiary}
              />
            </BasicButton>
          )}
        </div>
      </S.Wrapper>
    </>
  );
};

export default ProfileBar;
