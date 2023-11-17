import React, { useState, useEffect } from 'react';
import * as S from './style';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import { MdEdit } from 'react-icons/md';

const ProfileDetail = ({
  name,
  genType,
  genNum,
  rate,
  followers,
  followings,
  existFollow,
  isFollow,
  isList,
}) => {
  return (
    <>
      <S.Container direction={'row'}>
        {/* to-do: profileImg 추가(isList 기준 크기 달라짐) */}
        <S.Container direction={'column'}>
          <S.Container direction={'row'}>
            <BasicText text={name} font="var(--font-label-small)" />
            <MdEdit size={'16px'} />
          </S.Container>

          <S.Container direction={'row'}>
            <BasicText
              text={genType + ' ' + genNum}
              font="var(--font-label-small)"
            />
          </S.Container>

          <BasicText text={rate} font="var(--font-paragraph-small)" />

          {!isList && (
            <S.Container direction={'row'}>
              <BasicText
                text={'팔로워 ' + followers}
                font="var(--font-paragraph-small)"
                padding={'0 10px 0 0'}
              />
              <BasicText
                text={'팔로잉 ' + followings}
                font="var(--font-paragraph-small)"
              />
            </S.Container>
          )}
        </S.Container>
        {existFollow && (
          <S.Container width="70px" height="35px">
            {isFollow ? (
              <BasicButton
                text="팔로잉"
                backgroundColor="var(--color-accent)"
                font="var(--font-label-small)"
                radius="4px"
                width="100%"
                height="100%"
              />
            ) : (
              <BasicButton
                text="팔로우"
                backgroundColor="var(--color-primary)"
                font="var(--font-label-small)"
                radius="4px"
                width="100%"
                height="100%"
              />
            )}
          </S.Container>
        )}
      </S.Container>
    </>
  );
};

export default ProfileDetail;
