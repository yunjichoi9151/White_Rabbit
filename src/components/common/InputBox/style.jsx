import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyles';

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
    display: ${(props) => (props.$signType === 'none' ? 'none' : '')};
    color: ${CS.color.negative};
    font: ${CS.font.labelMedium};
  }
  margin-right: 5px;
`;
