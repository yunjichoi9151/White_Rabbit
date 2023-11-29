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
import { FaRegEye } from 'react-icons/fa';
import BasicImage from '../../common/BasicImage';
import ProfileImg from '../../common/ProfileImg';
import { SERVER_URL } from '../../../../api';

const length = {
  LONG: 100,
  SHORT: 50,
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
  QNA: '개발 Q&A',
  PROJECT: '프로젝트',
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
  imgSrc = '',
  view,
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
              font: CS.font.labelSmall,
              color: CS.color.white,
              minWidth: '80px',
              padding: '4px 12px',
              borderRadius: '4px',
              backgroundColor: labelColor[category],
              justifyContent: 'center',
            }}
          />
          <BasicText
            text={title}
            style={{
              font: CS.font.headingMedium,
              padding: '4px 12px',
            }}
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
        <S.ContentWrapper
          onClick={handleOnClickPost}
          style={{ display: contentLength === 'ALL' ? 'grid' : 'flex' }}
        >
          <BasicText
            text={substrContent}
            style={{
              font: CS.font.paragraphSmall,
              width: 'auto',
              marginBottom: '1rem',
            }}
          />
          {imgSrc !== SERVER_URL && (
            <S.ImgWrapper>
              {contentLength === 'ALL' ? (
                <BasicImage src={imgSrc} style={{ borderRadius: '0rem' }} />
              ) : (
                <ProfileImg
                  src={imgSrc}
                  style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '1rem',
                  }}
                />
              )}
            </S.ImgWrapper>
          )}
        </S.ContentWrapper>
        {/* <S.ShowWrapper>
          <BasicText
            text={'조회 ' + view}
            style={{ font: CS.font.labelSmall }}
          />
        </S.ShowWrapper> */}
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
          <S.IconWrapperCenter>
            <FaRegEye style={{ marginTop: '0.25rem' }} />
            <BasicText
              text={view}
              style={{ font: CS.font.labelSmall, padding: '4px' }}
            />
          </S.IconWrapperCenter>
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
