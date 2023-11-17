import { createGlobalStyle } from 'styled-components';
import NanumBarunGothic from '../fonts/NanumBarunGothic.woff';
import NanumBarunGothicBold from '../fonts/NanumBarunGothicBold.woff';
import NanumBarunGothicLight from '../fonts/NanumBarunGothicLight.woff';
import NanumBarunGothicUltraLight from '../fonts/NanumBarunGothicUltraLight.woff';
import NanumGothic from '../fonts/NanumGothic.woff';
import NanumGothicBold from '../fonts/NanumGothicBold.woff';
import NanumGothicExtraBold from '../fonts/NanumGothicExtraBold.woff';
import NanumGothicLight from '../fonts/NanumGothicLight.woff';

export const GlobalStyle = createGlobalStyle`
:root {
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-primary: #ab98dc;
  --color-secondary: #e3e7f0;
  --color-accent: #e3e7f0;
  --color-accent2: #7ea3db;
  --color-accent3: #F5B477;
  --color-accent4: #85B699;
  --color-accent5: #B0C84F;
  --color-negative: #ff7171;
  --color-warning: #ffe178;
  --color-positive: #79e354;
  
  --color-content-primary: var(--color-black);
  --color-content-secondary: #6b6b6b;
  --color-content-tertiary: #a6a6a6;

  --color-border-opaque: #615580;
  --color-border-transparent: #8989894d;
  --color-border-positiveTransparent: #0488481a;
  --color-border-negativeTransparent: #e119001a;

  --font-paragraph-small: 12px/1.6 'NanumGothic';
  --font-paragraph-medium: 16px/1.6 'NanumGothic';
  --font-paragraph-large: 24px/1.6 'NanumGothic';
  --font-paragraph-XL: 32px/1.6 'NanumGothic';

  --font-label-small: bold 12px/1.5 'NanumBarunGothic';
  --font-label-medium: bold 16px/1.5 'NanumBarunGothic';
  --font-label-large: bold 24px/1.5 'NanumBarunGothic';
  --font-label-XL: bold 32px/1.5 'NanumBarunGothic';
  --font-label-XXL: bold 40px/1.5 'NanumBarunGothic';

  --font-heading-medium: bold 16px/1.4 'NanumBarunGothic';
  --font-heading-large: bold 24px/1.4 'NanumBarunGothic';
  --font-heading-XL: bold 32px/1.4 'NanumBarunGothic';
  --font-heading-XXL: bold 40px/1.4 'NanumBarunGothic';
  --font-heading-XXXL: bold 48px/1.4 'NanumBarunGothic';
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color : transparent !important;
}

html {
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
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0rem;
  padding: 0;
  overflow-x: hidden;
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
