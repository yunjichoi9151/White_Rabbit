import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../../router/routes';
import { PiMagicWand, PiPencilSimpleLight } from 'react-icons/pi';
import { FiGithub } from 'react-icons/fi';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
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
              color: CS.color.primary,
              fontWeight: 600,
            }}
          />
        </S.HeaderWrap>
        {empty === true ? (
          <PiPencilSimpleLight style={{ display: 'none' }} />
        ) : (
          <Link to={ROUTER_LINK.NEWLINK.link}>
            <PiPencilSimpleLight
              style={{
                cursor: 'pointer',
                color: CS.color.contentTertiary,
              }}
            />
          </Link>
        )}
      </S.Container>
    </>
  );
}

export default IntroHeader;
