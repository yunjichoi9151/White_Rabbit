import React from 'react';
import * as S from './style';
import IntroHeader from '../../components/SkillLinkIntro/IntroHeader';
import EmptyIntro from '../../components/SkillLinkIntro/EmptyIntro';

function SkillLinkPage() {
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
        <EmptyIntro text="자신의 링크를 추가해 주세요." type="link" />
      </S.Container>
      <S.UnderLine />
    </>
  );
}

export default SkillLinkPage;
