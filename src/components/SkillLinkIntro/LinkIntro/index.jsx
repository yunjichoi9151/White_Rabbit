import React from 'react';
import BasicText from '../../common/BasicText';
import * as S from './style';
import { PiPencilSimpleLight, PiMinusCircle } from 'react-icons/pi';

function LinkIntro({ href, content }) {
  const text = content && content.trim().length > 0 ? content.trim()[0] : '';
  return (
    <>
      <S.Container>
        <S.ContentWrap>
          <BasicText
            text={text}
            style={{
              backgroundColor: 'var(--color-secondary)',
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
          <a href="/linkedit">
            <PiPencilSimpleLight
              style={{
                cursor: 'pointer',
                color: 'var(--color-content-tertiary)',
              }}
            />
          </a>

          <a>
            <PiMinusCircle
              style={{
                marginLeft: 4,
                cursor: 'pointer',
                color: 'var(--color-content-tertiary)',
              }}
            />
          </a>
        </S.IconButtonWrap>
      </S.Container>
    </>
  );
}

export default LinkIntro;
