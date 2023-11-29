import React from 'react';
import { Fragment } from 'react';
import * as S from './style';
import { MdModeEdit } from 'react-icons/md';
import { SERVER_URL } from '../../../../api';

const ProfileImg = ({
  src = '/assets/img/elice_icon.png',
  style,
  onClickEvent,
  isEditable = false,
}) => {
  return (
    <Fragment>
      {isEditable ? (
        <S.ProfileImage
          src={SERVER_URL + src}
          // src={src}
          style={style}
          onChange={onClickEvent}
        >
          <S.EditIconWrapper>
            <label htmlFor="featured-image">
              <MdModeEdit className="edit-icon" size={20} color="black" />
            </label>
            <S.EditIcon
              id="featured-image"
              type="file"
              accept="image/*"
              defaultValue=""
            />
          </S.EditIconWrapper>
        </S.ProfileImage>
      ) : (
        <S.ProfileImage src={src} style={style} onChange={onClickEvent} />
      )}
    </Fragment>
  );
};

export default ProfileImg;
