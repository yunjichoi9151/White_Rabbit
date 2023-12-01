import React, { Children } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../BasicText';
import BasicButton from '../BasicButton';
import InputBar from '../InputBar';
import { IoSearch, IoArrowBack } from 'react-icons/io5';
import { BsTextCenter } from 'react-icons/bs';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const LeftType = {
  TEXT: 'text',
  LOGO: 'logo',
  BACK: 'back button',
};

const CenterType = {
  TEXT: 'text',
  SEARCH: 'search bar',
};

const RightType = {
  TEXT: 'text button',
  SEARCH: 'search button',
};

const Header = ({
  typeLeft = 'TEXT',
  typeCenter,
  typeRight,
  textLeft,
  textCenter,
  textRight,
  existXIcon = false,
  leftOnClickEvent,
  rightOnClickEvent,
  rightXOnClickEvent,
  inputChangeEvent,
  handleKeyPress,
  headerStyle,
  value,
}) => {
  typeLeft = LeftType[typeLeft];
  typeCenter = CenterType[typeCenter];
  typeRight = RightType[typeRight];

  return (
    <S.Header style={headerStyle}>
      {/* header left */}
      <S.LeftWrap
        style={{
          ...(typeLeft === LeftType.TEXT &&
            textLeft === '개발Q&A' && { minWidth: '80px' }),
          ...(typeLeft === LeftType.TEXT &&
            (textLeft === '프로젝트 모집' || textLeft === '스터디 모집') && {
              minWidth: '104px',
            }),
          ...(typeLeft === LeftType.LOGO && { minWidth: '52px' }),
        }}
      >
        {typeLeft === LeftType.TEXT && (
          <BasicText
            text={textLeft}
            style={{
              font: CS.font.headingMedium,
              wordBreak: 'keep-all',
            }}
          />
        )}
        {typeLeft === LeftType.LOGO && (
          <BasicButton
            existIcon={true}
            btnStyle={{
              width: '2rem',
            }}
            children={<S.LogoImg src="/assets/img/elice_icon.png" alt="logo" />}
            handleOnClickButton={leftOnClickEvent}
          />
        )}
        {typeLeft === LeftType.BACK && (
          <BasicButton
            existIcon={true}
            handleOnClickButton={leftOnClickEvent}
            children={<IoArrowBack size={24} color={CS.color.black} />}
          />
        )}
      </S.LeftWrap>
      {/* header center */}
      <S.CenterWrap>
        {typeCenter === CenterType.TEXT && (
          <BasicText
            text={textCenter}
            style={{
              font: CS.font.headingMedium,
              justifyContent: 'center',
            }}
          />
        )}
        {typeCenter === CenterType.SEARCH && (
          <InputBar
            value={value}
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
            placeholder="제목, 내용, 작성자로 검색"
            handleOnChangeValue={inputChangeEvent}
            handleOnKeyDownValue={handleKeyPress}
            existClearBtn={value !== ''}
            btnOnClick={rightXOnClickEvent}
          />
        )}
      </S.CenterWrap>
      {/* header right */}
      <S.RightWrap>
        {typeRight === RightType.TEXT && (
          <BasicButton
            text={textRight}
            textStyle={{
              font: CS.font.labelSmall,
              color: CS.color.primary,
              wordBreak: 'keep-all',
            }}
            handleOnClickButton={rightOnClickEvent}
          />
        )}
        {typeRight === RightType.SEARCH && (
          <BasicButton
            existIcon={true}
            children={
              <IoSearch color={CS.color.contentTertiary} size="1.5rem" />
            }
            handleOnClickButton={rightOnClickEvent}
          />
        )}
      </S.RightWrap>
    </S.Header>
  );
};

export default Header;
