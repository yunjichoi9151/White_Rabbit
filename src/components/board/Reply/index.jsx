import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import ProfileBar from '../../profile/ProfileBar';
import BasicInput from '../../common/BasicInput';
import InputBar from '../../common/InputBar';
import BasicButton from '../../common/BasicButton';
import { commentApi } from '../../../../api/utils/comment';

const Reply = ({
  src,
  username,
  rate,
  commentId,
  createdAt,
  existFollowBtn = false,
  isFollow,
  existMoreBtn = true,
  comment,
  handleOnClickProfile,
  handleOnClickFollow,
  handleOnClickDots,
  style,
  isEditable = false,
  onCommentUpdated,
}) => {
  // EDIT Comment
  const handleSaveEdit = async () => {
    try {
      await commentApi.modifyComment(commentId, inputData);
      onCommentUpdated();
    } catch (error) {
      console.log('Error updating comment:', error);
    }
  };

  // CHANGE InputData
  const [inputData, setInputData] = useState(comment ? comment : '');

  const changeInputData = (e) => {
    setInputData(e.target.value);
  };

  // PRESS Enter Key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputData.length !== 0) {
      handleSaveEdit(inputData);
    }
  };

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
          {isEditable ? (
            <InputBar
              value={inputData}
              placeholder="댓글 내용을 입력해주세요."
              inputBarStyle={{
                height: '2.5rem',
                padding: '0.5rem 0.75rem',
                backgroundColor: CS.color.white,
                border: `0.5px solid ${CS.color.primary}`,
                borderRadius: '0.5rem',
                display: 'flex',
              }}
              inputStyle={{
                font: CS.font.paragraphSmall,
                textAlign: 'left',
                alignItems: 'center',
              }}
              existRight={true}
              handleOnChangeValue={changeInputData}
              handleOnKeyDownValue={handleKeyPress}
            >
              <BasicButton
                text="등록"
                textStyle={{
                  font: CS.font.labelSmall,
                }}
                btnStyle={{ width: '2rem' }}
                handleOnClickButton={handleSaveEdit}
              />
            </InputBar>
          ) : (
            <BasicText
              text={comment}
              style={{
                font: CS.font.paragraphSmall,
                backgroundColor: CS.color.secondary,
                width: '100%',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
              }}
            />
          )}
        </S.CommentWrapper>
      </S.Wrapper>
    </>
  );
};

export default Reply;
