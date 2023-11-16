import styled from 'styled-components';

export const Tab = styled.div`
  width: 100%;
  height: 100%;
  min-height: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) =>
    props.isActive
      ? '2px solid var(--color-border-opaque)'
      : '1px solid var(--color-border-transparent)'};
  cursor: pointer;
`;
