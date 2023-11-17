import React from 'react';
import * as S from './style';
import IntroHeader from '../../components/SkillLinkIntro/IntroHeader';
import EmptyIntro from '../../components/SkillLinkIntro/EmptyIntro';
import SkillIntro from '../../components/SkillLinkIntro/SkillIntro';
import LinkIntro from '../../components/SkillLinkIntro/LinkIntro';

function Skill_Link_Page() {
  return (
    <>
      <S.Container>
        <IntroHeader
          text="스킬"
          type="skill"
          empty={true}
          style={{ display: 'none' }}
        />
        <EmptyIntro text="자신의 스킬을 추가해 주세요." type="skill" />
      </S.Container>
      <S.UnderLine />

      <S.Container>
        <IntroHeader text="링크" type="link" empty={true} />
        <EmptyIntro text="자신의 링크를 추가해 주세요." />
      </S.Container>
      <S.UnderLine />

      <S.Container>
        <S.SkillIntroContainer>
          <IntroHeader text="스킬" type="skill" />
          <S.Introwrap>
            <SkillIntro text="Javascript" />
            <SkillIntro text="React" />
            <SkillIntro text="TypeScript" />
            <SkillIntro text="CSS" />
            <SkillIntro text="Next.js" />
            <SkillIntro text="Node.js" />
          </S.Introwrap>
        </S.SkillIntroContainer>
      </S.Container>
      <S.UnderLine />

      <S.Container>
        <IntroHeader text="링크" type="link" />
        <LinkIntro
          href={
            'https://kdt-gitlab.elice.io/sw_track/class_06/final_project/team07'
          }
          content={'gitlab'}
        />
        <LinkIntro
          href={
            'https://www.notion.so/elice/7-d7e420e8275a4860a23669461cbae6f7'
          }
          content={'notion'}
        />
      </S.Container>
      <S.UnderLine />
    </>
  );
}

export default Skill_Link_Page;
