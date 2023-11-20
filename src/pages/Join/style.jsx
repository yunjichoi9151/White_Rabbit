import styled from 'styled-components';

export const Header = styled.div`
  height: 50px;
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
  margin-right: 5px;
`;

export const TextWrap = styled.div`
  display: flex;
`;

export const CheckBoxWrap = styled.div`
  margin-top: 16px;
`;
export const ButtonWrap = styled.div`
  display: flex;
  margin: 20px;
`;
