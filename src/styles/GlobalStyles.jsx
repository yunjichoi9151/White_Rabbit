import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
