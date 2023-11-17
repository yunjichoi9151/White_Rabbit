import React from 'react';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import styled from 'styled-components';
import { PiPencilSimpleLight, PiMinusCircle } from 'react-icons/pi';
// import { Link } from 'react-router-dom';

// const navigate = useNavigate();

// const navigateToApp = () => {
//   navigate('/skill_Edit');
// };

const Container = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
`;
const ContentWrap = styled.div`
  display: flex;
  align-items: center;
`;
const IconButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

function LinkIntro({ href, content }) {
  const text = content && content.trim().length > 0 ? content.trim()[0] : '';
  return (
    <>
      <Container>
        <ContentWrap>
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
        </ContentWrap>
        <IconButtonWrap>
          {/* <Link to="/skill_edit"> */}
          <PiPencilSimpleLight
            style={{
              cursor: 'pointer',
              color: 'var(--color-content-tertiary)',
            }}
          />
          {/* </Link> */}
          <PiMinusCircle
            style={{
              marginLeft: 4,
              cursor: 'pointer',
              color: 'var(--color-content-tertiary)',
            }}
          />
        </IconButtonWrap>
      </Container>
    </>
  );
}

export default LinkIntro;
