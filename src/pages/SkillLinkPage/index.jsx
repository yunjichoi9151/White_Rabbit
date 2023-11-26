import React, { useEffect, useState } from 'react';
import { userApi } from '../../../api/utils/user';
import * as S from './style';
import IntroHeader from '../../components/SkillLinkIntro/IntroHeader';
import EmptyIntro from '../../components/SkillLinkIntro/EmptyIntro';
import SkillIntro from '../../components/SkillLinkIntro/SkillIntro';
import LinkIntro from '../../components/SkillLinkIntro/LinkIntro';

function SkillLinkPage({ userId, links, setLinks }) {
  /////// { API } /////////

  const isEmptyLinks = !links?.length;

  /////////////////
  return (
    <>
      <S.Container>
        <IntroHeader
          text="스킬"
          type="skill"
          empty={true}
          style={{ display: 'none' }}
        />
        {/* 비어있을때 */}
        <EmptyIntro
          text="자신의 스킬을 추가해 주세요."
          type="skill"
          userId={userId}
        />
        {/* skill API 불러왔을때 */}
        {/* <SkillIntro /> */}
      </S.Container>
      <S.UnderLine />

      <S.Container>
        <IntroHeader text="링크" type="link" empty={isEmptyLinks} />
        {/* 비어있을때 */}
        {isEmptyLinks ? (
          <EmptyIntro
            text="자신의 링크를 추가해 주세요."
            type="link"
            userId={userId}
          />
        ) : (
          <></>
        )}
        {/* links API 불러왔을때 */}
        {links?.map((link, index) => (
          <LinkIntro
            key={index}
            content={link.title}
            url={link.url}
            linkId={link._id}
            userId={userId}
            setLinks={setLinks}
          />
        ))}
      </S.Container>
      <S.UnderLine />
    </>
  );
}

export default SkillLinkPage;
