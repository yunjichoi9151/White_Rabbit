import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;
export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const InputWrap = styled.div`
  display: flex;

  input {
    flex: 1;
  }
`;

export const SignText = styled.p`
  &::before {
    content: '*';
    color: #ff7171;
  }
  margin-right: 5px;
`;
