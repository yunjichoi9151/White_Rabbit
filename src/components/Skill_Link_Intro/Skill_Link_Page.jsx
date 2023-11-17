import React from 'react';
import IntroHeader from './IntroHeader';
import EmptyIntro from './EmptyIntro';
import SkillIntro from './SkillIntro';
import styled from 'styled-components';
import LinkIntro from './LinkIntro';

const Container = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  padding-bottom: 20px;
  margin-right: 20px;
`;

const UnderLine = styled.div`
  border-bottom: 1px solid var(--color-border-transparent);
`;

const Introwrap = styled.div`
  margin-top: 12px;

  display: flex;
  flex-wrap: wrap;
`;
const SkillIntroContainer = styled.div``;

function Skill_Link_Page() {
  return (
    <>
      <Container>
        <IntroHeader
          text="스킬"
          type="skill"
          empty={true}
          style={{ display: 'none' }}
        />
        <EmptyIntro text="자신의 스킬을 추가해 주세요." type="skill" />
      </Container>
      <UnderLine />

      <Container>
        <IntroHeader text="링크" type="link" empty={true} />
        <EmptyIntro text="자신의 링크를 추가해 주세요." />
      </Container>
      <UnderLine />

      <Container>
        <SkillIntroContainer>
          <IntroHeader text="스킬" type="skill" />
          <Introwrap>
            <SkillIntro text="Javascript" />
            <SkillIntro text="React" />
            <SkillIntro text="TypeScript" />
            <SkillIntro text="CSS" />
            <SkillIntro text="Next.js" />
            <SkillIntro text="Node.js" />
          </Introwrap>
        </SkillIntroContainer>
      </Container>
      <UnderLine />

      <Container>
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
      </Container>
      <UnderLine />
    </>
  );
}

export default Skill_Link_Page;
