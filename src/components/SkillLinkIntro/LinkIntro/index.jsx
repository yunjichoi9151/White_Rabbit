import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_LINK } from '../../../router/routes';
import { PiPencilSimpleLight, PiMinusCircle } from 'react-icons/pi';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import { userApi } from '../../../../api/utils/user';

function LinkIntro({ url, content, linkId, userId, setLinks }) {
  const text = content ? content[0] : '';

  const handleClickRemove = async () => {
    const response = await userApi.removeLinks(
      {
        title: content,
        url,
      },
      userId,
    );

    if (response.status === 200) {
      setLinks((prev) => prev.filter((link) => link._id !== linkId));
    }
  };

  return (
    <>
      <S.Container>
        <S.ContentWrap>
          <BasicText
            text={text}
            style={{
              backgroundColor: CS.color.secondary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              marginRight: 8,
              padding: 4,
              width: 24,
              height: 24,

              font: CS.font.paragraphSmall,
            }}
          />
          <a href={url} style={{ font: CS.font.labelSmall }}>
            {content}
          </a>
        </S.ContentWrap>
        <S.IconButtonWrap>
          <Link
            to={`${ROUTER_LINK.LINKEDIT.link}/${userId}`}
            state={{
              linkId: linkId,
              title: content,
              url: url,
            }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <PiPencilSimpleLight
              style={{
                cursor: 'pointer',
                color: CS.color.contentTertiary,
              }}
            />
          </Link>

          <PiMinusCircle
            onClick={handleClickRemove}
            style={{
              marginLeft: 4,
              cursor: 'pointer',
              color: CS.color.contentTertiary,
            }}
          />
        </S.IconButtonWrap>
      </S.Container>
    </>
  );
}

export default LinkIntro;
