/** @format */

import { Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useOnInit } from '../hooks/useOnInit';
import { useState } from 'react';

const LanguageProvider = () => {
  const [ready, setReady] = useState(false);
  const { languageCode } = useParams<{ languageCode: string }>(); // Ottieni il codice della lingua dalla rotta
  const { i18n } = useTranslation();
  const loadTranslations = async (languageCode: string) => {
    try {
      const translations = await import(`../locales/${languageCode}.json`);
      i18n.addResourceBundle(languageCode, 'translation', translations, true, true);
      i18n.changeLanguage(languageCode);
    } catch (error) {
      console.error('Error loading translations:', error);
      // Gestione dell'errore, come fallback alla lingua predefinita
    } finally {
      setReady(true);
    }
  };

  useOnInit(() => {
    if (languageCode) {
      loadTranslations(languageCode); // Carica le traduzioni dal file locale
    }
  }, [languageCode]);

  if (!ready) {
    return null;
  }

  return <Outlet />;
};

export default LanguageProvider;
