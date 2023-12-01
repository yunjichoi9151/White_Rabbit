import styled from 'styled-components';
import React from 'react';
import InputSubMessage from '../InputSubMessage/InputSubMessage';

const FormLabel = ({
  children,
  infoMessage,
}) => {
  return (
    <Container>
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
`;
