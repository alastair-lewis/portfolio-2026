import React from 'react';
import ReactDOM from 'react-dom/client';

import {PostHogProvider} from '@posthog/react';
import {POSTHOG_PROVIDER_CONFIG} from './analytics/posthog.config';

import {App} from './App';
import './i18n';
import './styles/palette.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found in document.');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <PostHogProvider {...POSTHOG_PROVIDER_CONFIG}>
      <App />
    </PostHogProvider>
  </React.StrictMode>,
);
