import React from 'react';
import BasicText from '../../common/BasicText';

import styled from 'styled-components';

const Container = styled.div`
  margin-right: 4px;
  margin-bottom: 4px;
  display: flex;
  flex-wrap: wrap;
`;
function SkillIntro({ text }) {
  return (
    <>
      <Container>
        <BasicText
          text={text}
          style={{
            color: 'var(--color-black)',
            fontSize: 12,
            fontWeight: 600,

            padding: '8px 12px',

            border: '1px solid var(--color-secondary)',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </Container>
    </>
  );
}

export default SkillIntro;
