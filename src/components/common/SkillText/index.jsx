import React from 'react';
import { IoIosClose } from 'react-icons/io';

import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../BasicText';

function SkillText({ text, existIcon, choice, onClick }) {
  return (
    <>
      <S.Container onClick={onClick}>
        <S.Wrap
          style={
            choice === true
              ? {
                  background: CS.color.contentSecondary,
                }
              : {
                  background: CS.color.white,
                  border: `1px solid ${CS.color.secondary}`,
                }
          }
        >
          <BasicText
            text={text}
            style={
              choice === true
                ? {
                    color: CS.color.white,
                    font: CS.font.labelSmall,
                  }
                : {
                    color: CS.color.black,
                    font: CS.font.labelSmall,
                  }
            }
          />
          <IoIosClose
            style={
              existIcon === true
                ? { color: CS.color.white }
                : { display: 'none' }
            }
          />
        </S.Wrap>
      </S.Container>
    </>
  );
}

export default SkillText;
