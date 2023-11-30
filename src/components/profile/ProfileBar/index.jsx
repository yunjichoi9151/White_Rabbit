import React, { useState, useEffect } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import ProfileImg from '../../common/ProfileImg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { convertTimeAgo } from '../../../utils/convertTimeAgo';
import { followApi } from '../../../../api/utils/Follow';

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
  handleOnClickDots,
  style,
  onClickFollower,
  onClickFollowing,
  followId,
}) => {
  const [timeAgo, setTimeAgo] = useState('');
  const [_isFollow, setIsFollow] = useState(isFollow);

  const userLabelText = {
    USER: '레이서',
    ADMIN: '관리자',
    COACH: '코치',
  };

  const handleOnClickFollow = async (e) => {
    e.preventDefault();

    if (_isFollow) {
      const response = await followApi.deleteFollow(followId);

      if (response.status === 200) {
        setIsFollow(!_isFollow);
      }
    } else {
      const response = await followApi.postFollow(followId);
      if (response.status === 201) {
        setIsFollow(!_isFollow);
      }
    }
  };

  useEffect(() => {
    setTimeAgo(convertTimeAgo(createdAt));
  }, [createdAt]);

  return (
    <>
      <S.Wrapper style={style}>
        <ProfileImg
          src={src}
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
        {existFollowBtn && (
          <BasicButton
            text={_isFollow ? '팔로잉' : '팔로우'}
            handleOnClickButton={handleOnClickFollow}
            btnStyle={{
              width: '70px',
              height: '35px',
              borderRadius: '4px',
              backgroundColor: _isFollow ? CS.color.primary : CS.color.accent,
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
              width: '24px',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsThreeDotsVertical size="24px" color={CS.color.contentTertiary} />
          </BasicButton>
        )}
      </S.Wrapper>
    </>
  );
};

export default ProfileBar;
