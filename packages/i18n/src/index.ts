// Core configuration
export { createI18nInstance, formatTranslationResources } from "./config";
export { Platform } from "./config";
export type { I18nConfigOptions } from "./config";

// Provider component
export { I18nProvider } from "./provider";

// Re-export from react-i18next for direct access
export { useTranslation, Trans, withTranslation } from "react-i18next";

// Keep only truly valuable custom hooks
export { useLanguage, useLoadNamespace } from "./hooks";

// Utilities
export {
  formatDate,
  formatNumber,
  loadNamespaces,
  isNamespaceLoaded,
  addTranslations,
  createTranslationKeyExtractor,
} from "./utils";

// Types
export type {
  TranslationResource,
  TranslationResources,
  AppTranslationConfig,
  TranslationLoader,
  i18n,
} from "./types";

// React platform utilities
export {
  detectBrowserLanguage,
  loadTranslationResource,
  setHtmlLang,
} from "./platform/react";

// React Native platform utilities
export {
  detectDeviceLanguage,
  isRTL,
  preloadTranslations,
} from "./platform/react-native";
