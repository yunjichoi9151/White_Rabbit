import React from 'react';
import styled from 'styled-components';

const INFO_MESSAGE_STATUS = {
  error: "infoMessage error",
  success: "infoMessage",
};

const InputSubMessage = ({ children, status }) => {
  return (
    <Container>
      <span className={INFO_MESSAGE_STATUS[status]}>{children}</span>
    </Container>
  );
};

export default InputSubMessage;

const Container = styled.div`
  margin-top: 5px;
  .infoMessage {
    font-size: 12px;
    letter-spacing: -0.8px;
    color: blue;
  }

  .error {
    color: red !important;
  }
`;
