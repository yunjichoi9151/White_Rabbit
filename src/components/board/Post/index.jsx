import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import ProfileBar from '../../profile/ProfileBar';
import { BiLike } from 'react-icons/bi';
import { BiSolidLike } from 'react-icons/bi';
import { TbMessage2 } from 'react-icons/tb';
import { FaFireAlt } from 'react-icons/fa';

const length = {
  LONG: 100,
  SHORT: 30,
};

const labelColor = {
  BOARD: CS.color.primary,
  REVIEW: CS.color.accent2,
  QNA: CS.color.accent3,
  PROJECT: CS.color.accent4,
  STUDY: CS.color.accent5,
};

const labelText = {
  BOARD: '자유게시판',
  REVIEW: '취업후기',
  QNA: '개발Q&A',
  PROJECT: '사이드 프로젝트',
  STUDY: '스터디',
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
  contentLength = 'LONG',
  isHot = false,
  isLike = false,
  likes = 0,
  comments = 0,
  handleOnClickPost,
  handleOnClickProfile,
  handleOnClickFollow,
  handleOnClickDots,
  handleOnClickLikeBtn,
}) => {
  const substrContent =
    contentLength !== 'ALL' && content.length > length[contentLength]
      ? `${content.substring(0, length[contentLength])}...`
      : content;

  return (
    <>
      <S.Wrapper>
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
        <S.TitleWrapper onClick={handleOnClickPost}>
          <BasicText
            text={labelText[category]}
            style={{
              color: CS.color.white,
              font: CS.font.labelSmall,
              padding: '4px 12px',
              borderRadius: '4px',
              backgroundColor: labelColor[category],
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
        </S.TitleWrapper>
        <S.ContentWrapper>
          <BasicText
            text={substrContent}
            style={{ font: CS.font.paragraphMedium }}
          />
        </S.ContentWrapper>
        <S.IconBar>
          <S.IconWrapper>
            <BasicButton
              existIcon={true}
              children={isLike ? <BiSolidLike /> : <BiLike />}
              btnStyle={{ width: '16px' }}
              handleOnClickButton={handleOnClickLikeBtn}
            />
            <BasicText
              text={likes}
              style={{ font: CS.font.labelSmall, padding: '4px' }}
            />
          </S.IconWrapper>
          <S.IconWrapper style={{ flexDirection: 'row-reverse' }}>
            <BasicText
              text={comments}
              style={{ font: CS.font.labelSmall, padding: '4px' }}
            />
            <TbMessage2 />
          </S.IconWrapper>
        </S.IconBar>
      </S.Wrapper>
    </>
  );
};

export default Post;
