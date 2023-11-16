import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
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

  --color-content-primary: #000000;
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

  --font-label-small: 12px/1.6 'NanumBarunGothic';
  --font-label-medium: 16px/1.6 'NanumBarunGothic';
  --font-label-large: 24px/1.6 'NanumBarunGothic';
  --font-label-XL: 32px/1.6 'NanumBarunGothic';
  --font-label-XXL: 40px/1.6 'NanumBarunGothic';

  --font-heading-medium: 16px/1.6 'NanumBarunGothic';
  --font-heading-large: 24px/1.6 'NanumBarunGothic';
  --font-heading-XL: 32px/1.6 'NanumBarunGothic';
  --font-heading-XXL: 40px/1.6 'NanumBarunGothic';
  --font-heading-XXXL: 48px/1.6 'NanumBarunGothic';
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color : transparent !important;
}

html {
  /* max-width: 900px; */
  /* --color-background: #191919; */
  /* --color-primary: #cca4fc;/ */
  /* --color-light: #e3dfff; */
  height: calc(var(--vh, 1vh) * 100);
  /* background-color: white; */
}

@media (min-width: 901px) {
  html {
    margin-left: auto;
    margin-right: auto;
  }
}

body {
  /* font-family: ""; */
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0rem;
  padding: 0;
  overflow-x: hidden;
  /* background: var(--color-background); */
}

.scrollable {
  overflow: auto;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
