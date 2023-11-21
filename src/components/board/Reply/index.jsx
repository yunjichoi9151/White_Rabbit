import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import ProfileBar from '../../profile/ProfileBar';

const Reply = ({
  src,
  username,
  rate,
  createdAt,
  existFollowBtn = false,
  isFollow,
  existMoreBtn = true,
  comment,
  handleOnClickProfile,
  handleOnClickFollow,
  handleOnClickDots,
  style,
}) => {
  return (
    <>
      <S.Wrapper style={style}>
        <ProfileBar
          src={src}
          username={username}
          rate={rate}
          existTimeAgo={true}
          createdAt={createdAt}
          existFollowBtn={existFollowBtn}
          isFollow={isFollow}
          existMoreBtn={existMoreBtn}
          profileSize={1}
          handleOnClickBar={handleOnClickProfile}
          handleOnClickFollow={handleOnClickFollow}
          handleOnClickDots={handleOnClickDots}
          style={{ padding: '12px 20px' }}
        />
        <S.CommentWrapper>
          <BasicText
            text={comment}
            style={{
              font: CS.font.paragraphMedium,
              backgroundColor: CS.color.secondary,
              width: '100%',
              borderRadius: '8px',
              padding: '4px 12px',
            }}
          />
        </S.CommentWrapper>
      </S.Wrapper>
    </>
  );
};

export default Reply;
