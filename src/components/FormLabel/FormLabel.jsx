import styled from 'styled-components';
import React from 'react';
import InputSubMessage from '../InputSubMessage/InputSubMessage';

const FormLabel = ({
  children,
  infoMessage,
}) => {
  return (
    <Container status={infoMessage.status}>
      <div style={{ width: '100%' }}>{children}</div>

      {infoMessage && (
        <div style={{ marginTop: '5px', marginLeft: 20 }}>
          <InputSubMessage status={infoMessage.status}>
            {infoMessage.children}
          </InputSubMessage>
        </div>
      )}
    </Container>
  );
};

export default FormLabel;

const Container = styled.div`
  width: 100%;

  input {
    border: ${({ status }) => status === "error" ? `2px solid red` : ''} !important
  }
`;
