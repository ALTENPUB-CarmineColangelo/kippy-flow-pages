/** @format */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {},
  lng: 'en', // lingua di default
  fallbackLng: 'en', // lingua di fallback
  interpolation: {
    escapeValue: false, // React gestisce la protezione contro XSS
  },
});

export default i18n;
