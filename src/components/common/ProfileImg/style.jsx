import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyles';

export const ProfileImage = styled.div`
  width: 100%;
  border-radius: 50%;
  border: 0.125rem solid ${CS.color.primary};
  aspect-ratio: 1 / 1;

  background-size: cover;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const EditIconWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  border-radius: 50%;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const EditIcon = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  display: none;
  border: 0;
`;
