import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
