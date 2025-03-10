import { i18n } from "i18next";

/**
 * React-specific i18n utilities
 */

/**
 * Detects the user's browser language
 */
export function detectBrowserLanguage(
  supportedLanguages: string[],
  defaultLanguage: string,
): string {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  // Get browser language
  const browserLanguage = window.navigator.language;

  // Check if the browser language or its base language is supported
  const languageMatch = supportedLanguages.find(
    (lang) =>
      browserLanguage === lang || browserLanguage.split("-")[0] === lang,
  );

  return languageMatch || defaultLanguage;
}

/**
 * Loads translation resources dynamically for React web applications
 */
export async function loadTranslationResource(
  i18nInstance: i18n,
  language: string,
  namespace: string,
  loadFn: () => Promise<any>,
): Promise<void> {
  try {
    const resource = await loadFn();

    i18nInstance.addResourceBundle(language, namespace, resource, true, true);
  } catch (error) {
    console.error(
      `Failed to load ${language} translations for ${namespace}:`,
      error,
    );
  }
}

/**
 * Sets the HTML lang attribute
 */
export function setHtmlLang(language: string): void {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", language);
  }
}
