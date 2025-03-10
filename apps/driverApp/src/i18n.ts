import {
  createI18nInstance,
  formatTranslationResources,
  preloadTranslations,
  Platform,
} from '@repo/i18n';

// Import translation files
import enCommon from './translations/en/common.json';
import enAuth from './translations/en/auth.json';

// Define available namespaces
const namespaces = ['common', 'auth'];

// Define supported languages
const supportedLanguages = ['en'];

// Format translation resources
const resources = formatTranslationResources({
  en: {
    common: enCommon,
    auth: enAuth,
  },
});

// Create i18n instance for React Native
const i18n = createI18nInstance({
  resources,
  supportedLanguages,
  defaultLanguage: 'en',
  platform: Platform.REACT_NATIVE,
  namespaces,
  debug: __DEV__,
});

// Preload all translations (important for React Native)
preloadTranslations(i18n, resources);

export default i18n;
