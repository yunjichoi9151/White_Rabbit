import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 64px;
  height: 100%;
`;

export const SelectContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const SelectBarWrap = styled.div`
  display: flex;
`;

export const SignText = styled.p`
  &::before {
    content: '*';
    color: #ff7171;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBoxWrap = styled.div`
  margin-top: 28px;
`;
export const ButtonWrap = styled.div`
  display: flex;
  margin: 28px 20px;
`;
