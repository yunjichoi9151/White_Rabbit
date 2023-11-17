import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../../router/routes';
import { PiPencilSimpleLight, PiMinusCircle } from 'react-icons/pi';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';

function LinkIntro({ href, content }) {
  const text = content && content.trim().length > 0 ? content.trim()[0] : '';
  return (
    <>
      <S.Container>
        <S.ContentWrap>
          <BasicText
            text={text}
            style={{
              backgroundColor: CS.color.secondary,
              border: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              marginRight: 8,
              padding: 4,
              width: 24,
              height: 24,

              fontSize: 12,
            }}
          />
          <a href={href} style={{ fontSize: 12, fontWeight: 600 }}>
            {content}
          </a>
        </S.ContentWrap>
        <S.IconButtonWrap>
          <Link to={ROUTER_LINK.LINKEDIT.link}>
            <PiPencilSimpleLight
              style={{
                cursor: 'pointer',
                color: CS.color.contentTertiary,
              }}
            />
          </Link>

          <a>
            <PiMinusCircle
              style={{
                marginLeft: 4,
                cursor: 'pointer',
                color: CS.color.contentTertiary,
              }}
            />
          </a>
        </S.IconButtonWrap>
      </S.Container>
    </>
  );
}

export default LinkIntro;
