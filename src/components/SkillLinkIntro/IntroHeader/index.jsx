import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../../router/routes';
import { PiMagicWand, PiPencilSimpleLight } from 'react-icons/pi';
import { FiGithub } from 'react-icons/fi';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';

function IntroHeader({ type, empty, userId, isMe = true }) {
  const link =
    type === 'skill'
      ? `${ROUTER_LINK.NEWSKILL.link}/${userId}`
      : `${ROUTER_LINK.NEWLINK.link}/${userId}`;
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
              font: CS.color.headingLarge,
              color: CS.color.black,
              fontWeight: 600,
            }}
          />
        </S.HeaderWrap>

        <Link to={link}>
          <PiPencilSimpleLight
            style={{
              cursor: 'pointer',
              color: CS.color.contentTertiary,
              display: empty || !isMe ? 'none' : 'block',
            }}
          />
        </Link>
      </S.Container>
    </>
  );
}

export default IntroHeader;
