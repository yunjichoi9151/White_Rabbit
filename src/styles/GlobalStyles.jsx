import { createGlobalStyle } from 'styled-components';
import * as CS from './CommonStyles';
import NanumBarunGothic from '../fonts/NanumBarunGothic.woff';
import NanumBarunGothicBold from '../fonts/NanumBarunGothicBold.woff';
import NanumBarunGothicLight from '../fonts/NanumBarunGothicLight.woff';
import NanumBarunGothicUltraLight from '../fonts/NanumBarunGothicUltraLight.woff';
import NanumGothic from '../fonts/NanumGothic.woff';
import NanumGothicBold from '../fonts/NanumGothicBold.woff';
import NanumGothicExtraBold from '../fonts/NanumGothicExtraBold.woff';
import NanumGothicLight from '../fonts/NanumGothicLight.woff';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color : transparent !important;
}

html,#root {
  height: calc(var(--vh, 1vh) * 100);
}

@media (min-width: 901px) {
  html {
    margin-left: auto;
    margin-right: auto;
  }
}

body {
  font-family: "NanumBarunGothic", "NanumGothic", "NanumBarunGothicBold", "NanumGothicBold", "NanumBarunGothicLight", "NanumGothicLight", "NanumBarunGothicUltraLight", "NanumGothicExtraBold";
  max-width: 900px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
}

body::-webkit-scrollbar {
    display: none;
}

.scrollable {
  overflow: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

@font-face {
  font-family: 'NanumBarunGothic';
  src: local('NanumBarunGothic') url(${NanumBarunGothic}) format('woff');
}

@font-face {
  font-family: 'NanumBarunGothicBold';
  src: local('NanumBarunGothicBold') url(${NanumBarunGothicBold}) format('woff');
}

@font-face {
  font-family: 'NanumBarunGothicLight';
  src: local('NanumBarunGothicLight') url(${NanumBarunGothicLight}) format('woff');
}

@font-face {
  font-family: 'NanumBarunGothicUltraLight';
  src: local('NanumBarunGothicUltraLight') url(${NanumBarunGothicUltraLight}) format('woff');
}

@font-face {
  font-family: 'NanumGothic';
  src: local('NanumGothic') url(${NanumGothic}) format('woff');
}

@font-face {
  font-family: 'NanumGothicBold';
  src: local('NanumGothicBold') url(${NanumGothicBold}) format('woff');
}

@font-face {
  font-family: 'NanumGothicExtraBold';
  src: local('NanumGothicExtraBold') url(${NanumGothicExtraBold}) format('woff');
}

@font-face {
  font-family: 'NanumGothicLight';
  src: local('NanumGothicLight') url(${NanumGothicLight}) format('woff');
}

`;
