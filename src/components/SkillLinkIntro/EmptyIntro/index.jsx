import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../../router/routes';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';

function EmptyIntro({ text, onClickButton, type }) {
  return (
    <>
      <BasicText
        text={text}
        style={{
          color: CS.color.contentSecondary,
          font: CS.font.paragraphSmall,
          marginTop: 24,
        }}
      />

      {type === 'skill' ? (
        <Link to={ROUTER_LINK.NEWSKILL.path}>
          <BasicButton
            text={type === 'skill' ? '+ 스킬 추가' : '+ 링크 추가'}
            textStyle={{ fontColor: CS.color.black, font: CS.font.labelSmall }}
            btnStyle={{
              backgroundColor: CS.color.white,
              width: '90px',
              height: '20px',
              radius: '10px',
              border: `1px solid ${CS.color.borderTransparent}`,
              marginTop: 24,
            }}
            onClick={onClickButton}
          />
        </Link>
      ) : (
        <Link to={ROUTER_LINK.NEWLINK.path}>
          <BasicButton
            text={type === 'skill' ? '+ 스킬 추가' : '+ 링크 추가'}
            textStyle={{ fontColor: CS.color.black, font: CS.font.labelSmall }}
            btnStyle={{
              backgroundColor: CS.color.white,
              width: '90px',
              height: '20px',
              radius: '10px',
              border: `1px solid ${CS.color.borderTransparent}`,
              marginTop: 24,
            }}
            onClick={onClickButton}
          />
        </Link>
      )}
    </>
  );
}

export default EmptyIntro;
