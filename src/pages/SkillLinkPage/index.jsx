import React from 'react';
import * as S from './style';
import IntroHeader from '../../components/SkillLinkIntro/IntroHeader';
import EmptyIntro from '../../components/SkillLinkIntro/EmptyIntro';
import SkillIntro from '../../components/SkillLinkIntro/SkillIntro';
import LinkIntro from '../../components/SkillLinkIntro/LinkIntro';

function SkillLinkPage({ userId, links, setLinks, skills, isMe = true }) {
  const isEmptyLinks = !links?.length;
  const isEmptySkills = !skills?.length;

  return (
    <>
      <S.Container>
        <IntroHeader
          text="스킬"
          type="skill"
          empty={isEmptySkills}
          userId={userId}
          isMe={isMe}
        />

        {!isEmptySkills ? (
          <SkillIntro skills={skills} />
        ) : (
          <EmptyIntro
            text={
              isMe
                ? '자신의 스킬을 추가해 주세요.'
                : '아직 추가 된 스킬이 없습니다.'
            }
            type="skill"
            userId={userId}
            isMe={isMe}
          />
        )}
      </S.Container>
      <S.UnderLine />

      <S.Container>
        <IntroHeader
          text="링크"
          type="link"
          userId={userId}
          empty={isEmptyLinks}
          isMe={isMe}
        />
        {/* 비어있을때 */}
        {isEmptyLinks ? (
          <EmptyIntro
            text={
              isMe
                ? '자신의 링크를 추가해 주세요.'
                : '아직 추가 된 링크가 없습니다.'
            }
            type="link"
            userId={userId}
            isMe={isMe}
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
    </>
  );
}

export default SkillLinkPage;
