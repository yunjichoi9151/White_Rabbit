import * as S from './style';
import React from 'react';
import BasicButton from '../BasicButton';
import { GoHome, GoHomeFill } from 'react-icons/go';
import {
  BsChatSquareText,
  BsChatSquareTextFill,
  BsPeople,
  BsPeopleFill,
} from 'react-icons/bs';
import { IoPersonCircle, IoPersonCircleOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const textStyle = {
    paddingTop: '0.15rem',
    fontSize: '0.7rem',
    fontFamily: 'NanumBarunGothicBold',
  };

  return (
    <>
      <S.NavigationWrapper>
        <S.ButtonWrapper>
          <BasicButton
            size="2.5rem"
            existIcon={true}
            existText={true}
            text="홈"
            btnStyle={{
              flexDirection: 'column',
            }}
            textStyle={textStyle}
            handleOnClickButton={() => navigate('/home')}
          >
            <S.IconWrapper>
              {isActive('/home') ? (
                <GoHomeFill size="1.5rem" color="#000000" />
              ) : (
                <GoHome size="1.5rem" color="#000000" />
              )}
            </S.IconWrapper>
          </BasicButton>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <BasicButton
            size="2.5rem"
            existIcon={true}
            existText={true}
            text="개발 Q&A"
            btnStyle={{
              flexDirection: 'column',
            }}
            textStyle={textStyle}
            handleOnClickButton={() => navigate('/qna')}
          >
            <S.IconWrap>
              {isActive('/qna') ? (
                <BsChatSquareTextFill size="1.25rem" color="#000000" />
              ) : (
                <BsChatSquareText size="1.25rem" color="#000000" />
              )}
            </S.IconWrap>
          </BasicButton>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <BasicButton
            size="2.5rem"
            existIcon={true}
            existText={true}
            text="모집"
            btnStyle={{
              flexDirection: 'column',
            }}
            textStyle={textStyle}
            handleOnClickButton={() => navigate('/recruitment')}
          >
            <S.IconWrapper>
              {isActive('/recruitment') ? (
                <BsPeopleFill size="1.5rem" color="#000000" />
              ) : (
                <BsPeople size="1.5rem" color="#000000" />
              )}
            </S.IconWrapper>
          </BasicButton>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <BasicButton
            size="2.5rem"
            existIcon={true}
            existText={true}
            text="내 프로필"
            btnStyle={{
              flexDirection: 'column',
            }}
            textStyle={textStyle}
            handleOnClickButton={() => navigate('/mypage')}
          >
            <S.IconWrapper>
              {isActive('/mypage') ? (
                <IoPersonCircle size="1.5rem" color="#000000" />
              ) : (
                <IoPersonCircleOutline size="1.5rem" color="#000000" />
              )}
            </S.IconWrapper>
          </BasicButton>
        </S.ButtonWrapper>
      </S.NavigationWrapper>
    </>
  );
};

export default NavBar;
