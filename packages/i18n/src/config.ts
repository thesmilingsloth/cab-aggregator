import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { i18n as i18nType } from "./types";

export enum Platform {
  REACT = "react",
  REACT_NATIVE = "react-native",
}

export interface I18nConfigOptions {
  resources: Record<string, Record<string, object>>;
  supportedLanguages: string[];
  defaultLanguage: string;
  platform: Platform;
  namespaces: string[];
  defaultNamespace?: string;
  debug?: boolean;
}

/**
 * Creates and configures an i18next instance for React or React Native
 */
export function createI18nInstance({
  resources,
  supportedLanguages,
  defaultLanguage,
  platform,
  namespaces,
  defaultNamespace = namespaces[0] || "common",
  debug = false,
}: I18nConfigOptions): i18nType {
  const instance: i18nType = i18n.createInstance();

  // Configure with appropriate plugins based on platform
  const plugins = [initReactI18next];

  // Add language detector for React web apps
  if (platform === "react") {
    plugins.push(LanguageDetector as unknown as any);
  }

  // Apply plugins
  plugins.forEach((plugin) => instance.use(plugin));

  // Initialize with provided options
  instance.init({
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    ns: namespaces,
    defaultNS: defaultNamespace,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: platform === "react", // Disable suspense in React Native
    },
    detection:
      platform === "react"
        ? {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
          }
        : undefined,
    debug,
  });

  return instance;
}

/**
 * Helper function to load translations from a standard directory structure
 */
export function formatTranslationResources(
  translations: Record<string, Record<string, object>>,
): Record<string, Record<string, object>> {
  const resources: Record<string, Record<string, object>> = {};

  // Format: { en: { common: {...}, auth: {...} }, fr: { common: {...}, auth: {...} } }
  Object.entries(translations).forEach(([language, namespaces]) => {
    resources[language] = {};
    Object.entries(namespaces).forEach(([namespace, translations]) => {
      resources[language][namespace] = translations;
    });
  });

  return resources;
}
