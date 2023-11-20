import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import NavBar from '../../components/common/NavBar';
import Header from '../../components/common/Header';
import BasicButton from '../../components/common/BasicButton';
import CheckBox from '../../components/common/CheckBox';
import Post from '../../components/board/Post';
import { FaCircle } from 'react-icons/fa';

const QNA = () => {
  const [selectedFilter, setSelectedFilter] = useState('latest');

  const handleFilterButtonClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleCheckBoxChange = (e) => {
    if (e.target.checked) {
      console.log('체크되었습니다.');
    } else {
      console.log('해제되었습니다.');
    }
  };

  return (
    <S.QNAWrap style={{ flexDirection: 'column' }}>
      <Header
        text="개발자Q&A"
        existText={true}
        existRight={true}
        headerStyle={{ backgroundColor: CS.color.white }}
      />
      <S.QNAWrap
        style={{
          width: '100%',
          padding: '68px 24px 12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <S.QNAWrap>
          <BasicButton
            text="최근 등록 순"
            textStyle={{
              font: CS.font.labelSmall,
              padding: '4px',
              width: '100%',
            }}
            existText={false}
            iconDirection={'left'}
            children={
              <FaCircle
                size={12}
                color={
                  selectedFilter === 'latest'
                    ? CS.color.positive
                    : CS.color.secondary
                }
              />
            }
            handleOnClickButton={() => handleFilterButtonClick('latest')}
          />
          <BasicButton
            text="댓글 많은 순"
            textStyle={{
              font: CS.font.labelSmall,
              padding: '4px',
              width: '100%',
            }}
            existText={false}
            iconDirection={'left'}
            children={
              <FaCircle
                size={12}
                color={
                  selectedFilter === 'reply'
                    ? CS.color.positive
                    : CS.color.secondary
                }
              />
            }
            handleOnClickButton={() => handleFilterButtonClick('reply')}
          />
        </S.QNAWrap>
        <CheckBox
          text={'내 질문만 보기'}
          textColor={CS.color.contentSecondary}
          style={{ padding: '4px', justifyContent: 'flex-end' }}
          onChange={handleCheckBoxChange}
        />
      </S.QNAWrap>
      <S.QNAWrap
        style={{
          flexDirection: 'column',
          backgroundColor: CS.color.secondary,
          paddingBottom: '100px',
        }}
      >
        <S.QNAWrap style={{ padding: '12px 0' }}>
          <Post
            src={''}
            username="UserName"
            rate="레이서"
            createdAt="2023"
            existFollowBtn={false}
            isFollow={false}
            existMoreBtn={false}
            category={'QNA'}
            title={'title'}
            content={'content'}
            contentLength="LONG"
            isHot={false}
            isLike={false}
            likes={0}
            comments={0}
          />
        </S.QNAWrap>
        <S.QNAWrap style={{ padding: '12px 0' }}>
          <Post
            src={''}
            username="UserName"
            rate="레이서"
            createdAt="2023"
            existFollowBtn={false}
            isFollow={false}
            existMoreBtn={false}
            category={'QNA'}
            title={'title'}
            content={'content'}
            contentLength="LONG"
            isHot={false}
            isLike={false}
            likes={0}
            comments={0}
          />
        </S.QNAWrap>
        <S.QNAWrap style={{ padding: '12px 0' }}>
          <Post
            src={''}
            username="UserName"
            rate="레이서"
            createdAt="2023"
            existFollowBtn={false}
            isFollow={false}
            existMoreBtn={false}
            category={'QNA'}
            title={'title'}
            content={'content'}
            contentLength="LONG"
            isHot={false}
            isLike={false}
            likes={0}
            comments={0}
          />
        </S.QNAWrap>
      </S.QNAWrap>
      <NavBar />
    </S.QNAWrap>
  );
};

export default QNA;
