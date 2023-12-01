import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container);
serviceWorkerRegistration.register();
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
