import React from 'react';
import BasicText from '../../common/BasicText';
import styled from 'styled-components';
import { PiMagicWand, PiPencilSimpleLight } from 'react-icons/pi';
import { FiGithub } from 'react-icons/fi';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
`;

function IntroHeader({ type, empty }) {
  return (
    <>
      <Container>
        <HeaderWrap>
          {type === 'skill' ? (
            <PiMagicWand style={{ marginRight: '4px' }} />
          ) : (
            <FiGithub style={{ marginRight: '4px' }} />
          )}
          <BasicText
            text={type === 'skill' ? '스킬' : '링크'}
            size={'16px'}
            color={'var(--content-primary)'}
            bold={'600'}
          />
        </HeaderWrap>
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
      </Container>
    </>
  );
}

export default IntroHeader;
