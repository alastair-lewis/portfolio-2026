import {render, type RenderOptions} from '@testing-library/react';
import i18n from 'i18next';
import type {ReactElement} from 'react';
import {I18nextProvider, initReactI18next} from 'react-i18next';

import en from '../i18n/locales/en.json';

const testI18n = i18n.createInstance();
testI18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {en: {translation: en}},
  interpolation: {escapeValue: false},
});

function AllProviders({children}: {children: React.ReactNode}) {
  return <I18nextProvider i18n={testI18n}>{children}</I18nextProvider>;
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {wrapper: AllProviders, ...options});
}

export * from '@testing-library/react';
export {customRender as render};
