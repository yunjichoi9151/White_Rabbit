import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import SkillText from '../../common/SkillText';

function SkillIntro() {
  return (
    <>
      <S.Container>
        <SkillText text="javascript" existIcon={false} choice={false} />
      </S.Container>
    </>
  );
}

export default SkillIntro;
