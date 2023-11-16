import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
