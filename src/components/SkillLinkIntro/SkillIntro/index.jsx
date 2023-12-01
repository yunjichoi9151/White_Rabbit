import React from 'react';
import * as S from './style';
import SkillText from '../../common/SkillText';

function SkillIntro({ skills }) {
  return (
    <>
      <S.Container>
        {skills?.map((skill) => (
          <SkillText
            key={skill._id}
            text={skill.skill}
            existIcon={false}
            choice={false}
          />
        ))}
      </S.Container>
    </>
  );
}

export default SkillIntro;
