import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';
import './i18n';
import './styles/palette.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found in document.');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
