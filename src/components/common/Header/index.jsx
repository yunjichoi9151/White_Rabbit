import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../BasicText';
import BasicButton from '../BasicButton';
import InputBar from '../InputBar';
import { IoSearch, IoArrowBack } from 'react-icons/io5';

const Header = ({
  existText = false,
  existLeft = false,
  existRight = false,
  existSearch = false,
  text = '',
  BtnText = '',
  iconOnClickEvent,
  btnOnClickEvent,
  iconChildren,
  headerStyle,
}) => {
  return (
    <S.Header style={headerStyle}>
      {/* 글씨만 있는 헤더 */}
      {existText && !existLeft && !existRight && !existSearch && (
        <BasicText
          text={text}
          style={{
            width: '100%',
            justifyContent: 'center',
            font: CS.font.headingMedium,
          }}
        />
      )}
      {/* 글씨와 오른쪽 아이콘 있는 헤더 */}
      {existText && !existLeft && existRight && !existSearch && (
        <S.HeaderWrap>
          <BasicText
            text={text}
            style={{
              width: '100%',
              font: CS.font.headingMedium,
            }}
          />
          <BasicButton existIcon={true} btnStyle={{ width: '10%' }}>
            <IoSearch color={CS.color.black} size="1.25rem" />
          </BasicButton>
        </S.HeaderWrap>
      )}
      {/* 글씨와 왼쪽 아이콘 있는 헤더 */}
      {existText && existLeft && !existRight && !existSearch && (
        <S.HeaderWrap>
          <BasicButton existIcon={true} btnStyle={{ width: '10%' }}>
            <IoArrowBack />
          </BasicButton>
          <BasicText
            text={text}
            style={{
              width: '90%',
              paddingRight: '10%',
              justifyContent: 'center',
              font: CS.font.headingMedium,
            }}
          />
        </S.HeaderWrap>
      )}
      {/* 글씨와 왼쪽 아이콘, 오른쪽 버튼 있는 헤더 */}
      {existText && existLeft && existRight && !existSearch && (
        <S.HeaderWrap>
          <BasicButton existIcon={true} btnStyle={{ width: '10%' }}>
            <IoArrowBack color={CS.color.black} />
          </BasicButton>
          <BasicText
            text={text}
            style={{
              width: '90%',
              justifyContent: 'center',
              font: CS.font.headingMedium,
            }}
          />
          <BasicButton
            text={BtnText}
            btnStyle={{
              width: '10%',
            }}
            textStyle={{
              font: CS.font.labelSmall,
              color: CS.color.primary,
            }}
          />
        </S.HeaderWrap>
      )}
      {/* 왼쪽에 로고 버튼, 오른쪽에 search 있는 헤더 */}
      {!existText && existLeft && !existRight && existSearch && (
        <S.HeaderWrap>
          <BasicButton
            existIcon={true}
            btnStyle={{
              width: '10%',
            }}
          >
            <S.LogoImg src="/assets/img/elice_icon.png" alt="logo" />
          </BasicButton>
          <InputBar
            existLeft={true}
            inputBarStyle={{
              height: '2.5rem',
              padding: '0.5rem 0.75rem',
              marginLeft: '0.75rem',
              backgroundColor: CS.color.secondary,
              borderRadius: '1rem',
              alignItems: 'center',
              display: 'flex',
            }}
            inputStyle={{
              font: CS.font.labelSmall,
              textAlign: 'left',
              alignItems: 'center',
            }}
            placeholder="회사, 사람, 키워드로 검색"
          >
            <IoSearch color={CS.color.contentTertiary} size="1.25rem" />
          </InputBar>
        </S.HeaderWrap>
      )}
      {/* search만 있는 헤더 */}
      {!existText && !existLeft && !existRight && existSearch && (
        <S.HeaderWrap>
          <InputBar
            existLeft={true}
            inputBarStyle={{
              height: '2.5rem',
              padding: '0.5rem 0.75rem',
              backgroundColor: CS.color.secondary,
              borderRadius: '1rem',
              alignItems: 'center',
              display: 'flex',
            }}
            inputStyle={{
              font: CS.font.labelSmall,
              textAlign: 'left',
              alignItems: 'center',
            }}
            placeholder="회사, 사람, 키워드로 검색"
          >
            <IoSearch color={CS.color.contentTertiary} size="1.25rem" />
          </InputBar>
        </S.HeaderWrap>
      )}
    </S.Header>
  );
};

export default Header;
