import React, { useState } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import NavBar from '../../components/common/NavBar';
import Header from '../../components/common/Header';
import BasicButton from '../../components/common/BasicButton';
import WriteButton from '../../components/board/WriteButton';
import Post from '../../components/board/Post';
import { FaCircle } from 'react-icons/fa';

const Recruitment = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterButtonClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <S.RecruitmentWrap>
      <Header
        text={`${selectedFilter ? selectedFilter : '프로젝트/스터디'} 모집`}
        existText={true}
        existRight={true}
        headerStyle={{ backgroundColor: CS.color.white }}
      />
      <S.FilterBar>
        <BasicButton
          text="전체"
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
              color={!selectedFilter ? CS.color.positive : CS.color.secondary}
            />
          }
          handleOnClickButton={() => handleFilterButtonClick('')}
        />
        <BasicButton
          text="프로젝트"
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
                selectedFilter === '프로젝트'
                  ? CS.color.positive
                  : CS.color.secondary
              }
            />
          }
          handleOnClickButton={() => handleFilterButtonClick('프로젝트')}
        />
        <BasicButton
          text="스터디"
          textStyle={{
            font: CS.font.labelSmall,
            padding: '4px',
          }}
          existText={false}
          iconDirection={'left'}
          children={
            <FaCircle
              size={12}
              color={
                selectedFilter === '스터디'
                  ? CS.color.positive
                  : CS.color.secondary
              }
            />
          }
          handleOnClickButton={() => handleFilterButtonClick('스터디')}
        />
      </S.FilterBar>
      <S.PostList>
        <S.PostWrap>
          <Post
            src={''}
            username={'UserName'}
            rate={'레이서'}
            createdAt={'2023'}
            existFollowBtn={false}
            isFollow={false}
            existMoreBtn={false}
            category={'PROJECT'}
            title={'title'}
            content={'content'}
            contentLength={'LONG'}
            isHot={false}
            isLike={false}
            likes={0}
            comments={0}
          />
        </S.PostWrap>
        <S.PostWrap>
          <Post
            src={''}
            username={'UserName'}
            rate={'레이서'}
            createdAt={'2023'}
            existFollowBtn={false}
            isFollow={false}
            existMoreBtn={false}
            category={'STUDY'}
            title={'title'}
            content={'content'}
            contentLength={'LONG'}
            isHot={false}
            isLike={false}
            likes={0}
            comments={0}
          />
        </S.PostWrap>
        <S.PostWrap>
          <Post
            src={''}
            username={'UserName'}
            rate={'레이서'}
            createdAt={'2023'}
            existFollowBtn={false}
            isFollow={false}
            existMoreBtn={false}
            category={'PROJECT'}
            title={'title'}
            content={'content'}
            contentLength={'LONG'}
            isHot={false}
            isLike={false}
            likes={0}
            comments={0}
          />
        </S.PostWrap>
      </S.PostList>
      <WriteButton />
      <NavBar />
    </S.RecruitmentWrap>
  );
};

export default Recruitment;
