import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import NavBar from '../../components/common/NavBar';
import Post from '../../components/board/Post';
import detailData from '../../test/detail.json';
import userData from '../../test/user.json';
import commentData from '../../test/comment.json';
import Header from '../../components/common/Header';
import Reply from '../../components/board/Reply';
import ProfileImg from '../../components/common/ProfileImg';
import InputBar from '../../components/common/InputBar';
import BasicButton from '../../components/common/BasicButton';
import SelectBar from '../../components/common/SelectBar';
import BasicText from '../../components/common/BasicText';
import TextArea from '../../components/common/TextArea';
import { FaRegImage } from 'react-icons/fa6';

const Write = () => {
  const options = [
    { key: 'BOARD', value: 'BOARD', name: '자유게시판' },
    { key: 'REVIEW', value: 'REVIEW', name: '취업후기' },
    { key: 'QNA', value: 'QNA', name: '개발 Q&A' },
    { key: 'PROJECT', value: 'PROJECT', name: '프로젝트 모집' },
    { key: 'STUDY', value: 'STUDY', name: '스터디 모집' },
  ];
  return (
    <S.WriteWrap>
      <SelectBar
        options={options}
        style={{
          width: '90%',
          padding: '0.75rem',
          margin: '1rem 0rem',
          borderRadius: '0.75rem',
          font: CS.font.labelSmall,
          color: CS.color.contentTertiary,
          border: `0.5px solid ${CS.color.contentTertiary}`,
        }}
      />
      <S.Title>
        <BasicText text="제목" style={{ font: CS.font.labelMedium }} />
        <BasicText text="*" style={{ color: CS.color.warning }} />
      </S.Title>
      <InputBar
        placeholder="제목을 입력해주세요."
        inputBarStyle={{
          width: '90%',
          height: '2.5rem',
          padding: '0.75rem',
          margin: '1rem 0rem',
          backgroundColor: CS.color.white,
          borderRadius: '0.75rem',
          border: `0.5px solid ${CS.color.contentTertiary}`,
        }}
        inputStyle={{
          font: CS.font.labelSmall,
          textAlign: 'left',
        }}
      ></InputBar>
      <S.Content>
        <BasicText text="내용" style={{ font: CS.font.labelMedium }} />
        <BasicText text="*" style={{ color: CS.color.warning }} />
      </S.Content>
      <TextArea
        placeholder="내용을 입력해주세요."
        style={{
          width: '90%',
          height: '10rem',
          padding: '0.75rem',
          margin: '1rem 0rem',
          backgroundColor: CS.color.white,
          borderRadius: '0.75rem',
          border: `0.5px solid ${CS.color.contentTertiary}`,
          font: CS.font.labelSmall,
          textAlign: 'left',
        }}
      />
      <BasicButton
        text="이미지 첨부"
        existIcon={true}
        btnStyle={{ width: '90%', justifyContent: 'left' }}
        textStyle={{ font: CS.font.paragraphSmall, marginLeft: '0.5rem' }}
        iconDirection="left"
      >
        <FaRegImage />
      </BasicButton>
    </S.WriteWrap>
  );
};

export default Write;
