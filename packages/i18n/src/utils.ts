import { i18n } from "i18next";

/**
 * Gets a formatted date according to the current locale
 */
export function formatDate(
  date: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
  locale?: string,
): string {
  const dateObj = typeof date === "object" ? date : new Date(date);
  const currentLocale =
    locale || (typeof navigator !== "undefined" ? navigator.language : "en");

  return new Intl.DateTimeFormat(currentLocale, options).format(dateObj);
}

/**
 * Gets a formatted number according to the current locale
 */
export function formatNumber(
  num: number,
  options?: Intl.NumberFormatOptions,
  locale?: string,
): string {
  const currentLocale =
    locale || (typeof navigator !== "undefined" ? navigator.language : "en");

  return new Intl.NumberFormat(currentLocale, options).format(num);
}

/**
 * Helper to load multiple namespaces at once
 */
export async function loadNamespaces(
  i18nInstance: i18n,
  namespaces: string[],
): Promise<void> {
  await i18nInstance.loadNamespaces(namespaces);
}

/**
 * Helper to check if a namespace is loaded
 */
export function isNamespaceLoaded(
  i18nInstance: i18n,
  language: string,
  namespace: string,
): boolean {
  return i18nInstance.hasResourceBundle(language, namespace);
}

/**
 * Helper to load translations from plain objects
 */
export function addTranslations(
  i18nInstance: i18n,
  language: string,
  namespace: string,
  translations: object,
): void {
  i18nInstance.addResourceBundle(language, namespace, translations, true, true);
}

/**
 * Creates a mapping function to retrieve translation keys used in code
 * This helps with finding unused translations
 */
export function createTranslationKeyExtractor() {
  const usedKeys = new Set<string>();

  return {
    trackKey: (key: string) => {
      usedKeys.add(key);
    },
    getUsedKeys: () => Array.from(usedKeys),
  };
}
