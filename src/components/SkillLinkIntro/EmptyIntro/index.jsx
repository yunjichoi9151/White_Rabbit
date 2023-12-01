import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../../router/routes';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';

function EmptyIntro({ text, onClickButton, type, userId, isMe = true }) {
  return (
    <div style={{ background: 'white' }}>
      <BasicText
        text={text}
        style={{
          color: CS.color.contentSecondary,
          font: CS.font.paragraphSmall,
          marginTop: 24,
        }}
      />
      {isMe && type === 'skill' ? (
        <Link
          to={`${ROUTER_LINK.NEWSKILL.link}/${userId}`}
          style={{ width: 90, display: 'block' }}
        >
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
        isMe && (
          <Link
            to={`${ROUTER_LINK.NEWLINK.link}/${userId}`}
            style={{ width: 90, display: 'block' }}
          >
            <BasicButton
              text={type === 'skill' ? '+ 스킬 추가' : '+ 링크 추가'}
              textStyle={{
                fontColor: CS.color.black,
                font: CS.font.labelSmall,
              }}
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
        )
      )}
    </div>
  );
}

export default EmptyIntro;
