import { useTranslation, UseTranslationOptions } from "react-i18next";
import { i18n } from "i18next";

/**
 * Hook to access translations with a specific namespace
 */
export function useAppTranslation(
  namespace?: string,
  options?: UseTranslationOptions<undefined>,
) {
  return useTranslation(namespace, options);
}

/**
 * Hook to use multiple namespaces at once
 */
export function useMultipleNamespaces(
  namespaces: string[],
  options?: UseTranslationOptions<undefined>,
) {
  const { t, i18n, ready } = useTranslation(namespaces, options);
  return { t, i18n, ready };
}

/**
 * Hook to handle language switching
 */
export function useLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    availableLanguages: i18n.languages,
  };
}

/**
 * Hook to lazy load additional namespaces when needed
 */
export function useLoadNamespace(namespace: string | string[]) {
  const { i18n } = useTranslation();

  const loadNamespace = async () => {
    await i18n.loadNamespaces(
      Array.isArray(namespace) ? namespace : [namespace],
    );
  };

  return { loadNamespace };
}

/**
 * Get the i18n instance directly
 */
export function getI18n(): i18n {
  return useTranslation().i18n;
}
