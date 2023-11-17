import React from 'react';
import BasicText from '../BasicText';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledInput = styled.input`
  margin-right: 8px;
`;

function CheckBox({ checked, onChange, text }) {
  return (
    <Container>
      <StyledInput checked={checked} type="checkbox" onChange={onChange} />
      {text ? (
        <BasicText
          text={text}
          style={{
            color: 'var(--color-black)',
          }}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}

export default CheckBox;
