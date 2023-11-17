import React from 'react';
import { PiMagicWand, PiPencilSimpleLight } from 'react-icons/pi';
import { FiGithub } from 'react-icons/fi';
import * as S from './style';
import BasicText from '../../common/BasicText';

function IntroHeader({ type, empty }) {
  return (
    <>
      <S.Container>
        <S.HeaderWrap>
          {type === 'skill' ? (
            <PiMagicWand style={{ marginRight: '4px' }} />
          ) : (
            <FiGithub style={{ marginRight: '4px' }} />
          )}
          <BasicText
            text={type === 'skill' ? '스킬' : '링크'}
            style={{
              size: 16,
              color: 'var(--content-primary)',
              fontWeight: 600,
            }}
          />
        </S.HeaderWrap>
        {empty === true ? (
          <PiPencilSimpleLight style={{ display: 'none' }} />
        ) : (
          <a href="/newlink">
            <PiPencilSimpleLight
              style={{
                cursor: 'pointer',
                color: 'var(--color-content-tertiary)',
              }}
            />
          </a>
        )}
      </S.Container>
    </>
  );
}

export default IntroHeader;
