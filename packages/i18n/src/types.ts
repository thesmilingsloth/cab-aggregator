import { i18n, TFunction } from "i18next";

export type { i18n };

/**
 * Generic interface for translation resources
 */
export interface TranslationResource {
  [key: string]: string | TranslationResource;
}

/**
 * Shape of translation resources
 */
export interface TranslationResources {
  [language: string]: {
    [namespace: string]: TranslationResource;
  };
}

/**
 * Interface to help with typed translation keys
 * Usage example:
 *
 * type MyNamespaces = 'common' | 'auth';
 * type MyTranslations = {
 *   common: {
 *     hello: string;
 *     welcome: string;
 *   };
 *   auth: {
 *     login: string;
 *     register: string;
 *   };
 * };
 *
 * // Creates a typed t function
 * const { t } = useAppTranslation<MyNamespaces, MyTranslations>();
 *
 * // Now t is fully typed
 * t('common:hello'); // works
 * t('common:invalid'); // TypeScript error
 */
export interface TypedTFunction<Namespaces extends string, Resources>
  extends TFunction {
  <K extends `${Namespaces}:${string}`>(key: K): string;
}

/**
 * Type for app translation configuration
 */
export interface AppTranslationConfig {
  defaultLanguage: string;
  supportedLanguages: string[];
  namespaces: string[];
  defaultNamespace?: string;
}

/**
 * Format for app-specific translation loader
 */
export interface TranslationLoader {
  loadTranslation: (
    language: string,
    namespace: string,
  ) => Promise<TranslationResource>;
}
