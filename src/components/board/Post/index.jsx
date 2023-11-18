import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import ProfileBar from '../../profile/ProfileBar';
import { BiLike } from 'react-icons/bi';
import { TbMessage2 } from 'react-icons/tb';
import { FaFireAlt } from 'react-icons/fa';

const length = {
  long: 100,
  short: 30,
};

const Post = ({
  src,
  username,
  rate,
  createdAt,
  existFollowBtn = false,
  isFollow,
  existMoreBtn = false,
  category,
  title,
  content,
  contentLength = 'long',
  isHot = false,
  likes = 0,
  replies = 0,
}) => {
  const substrContent =
    content.length > length[contentLength]
      ? `${content.substring(0, length[contentLength])}...`
      : content;
  return (
    <>
      <S.Container
        style={{ flexDirection: 'column', backgroundColor: CS.color.white }}
      >
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
          style={{ padding: '12px 20px' }}
        />
        <S.Container style={{ padding: '12px 20px' }}>
          <BasicText
            text={category}
            style={{
              color: CS.color.white,
              font: CS.font.labelSmall,
              padding: '4px 12px',
              borderRadius: '4px',
              backgroundColor: CS.color.primary,
            }}
          />
          <BasicText
            text={title}
            style={{ font: CS.font.headingMedium, padding: '4px 12px' }}
          />
          {isHot && (
            <>
              <FaFireAlt size={16} color={CS.color.negative} />
              <BasicText
                text={'HOT'}
                style={{
                  font: CS.font.labelSmall,
                  color: CS.color.negative,
                  padding: '4px',
                }}
              />
            </>
          )}
        </S.Container>

        <S.Container style={{ padding: '4px 20px 20px 20px' }}>
          <BasicText
            text={substrContent}
            style={{ font: CS.font.paragraphSmall }}
          />
        </S.Container>

        <S.Container
          style={{
            justifyContent: 'space-between',
            padding: '4px 24px',
            border: `solid 1px ${CS.color.borderTransparent}`,
          }}
        >
          <S.Container>
            <BiLike />
            <BasicText
              text={likes}
              style={{ font: CS.font.labelSmall, padding: '4px' }}
            />
          </S.Container>
          <S.Container style={{ flexDirection: 'row-reverse' }}>
            <BasicText
              text={replies}
              style={{ font: CS.font.labelSmall, padding: '4px' }}
            />
            <TbMessage2 />
          </S.Container>
        </S.Container>
      </S.Container>
    </>
  );
};

export default Post;
