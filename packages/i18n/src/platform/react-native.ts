import { i18n } from "i18next";
import { NativeModules, Platform } from "react-native";

/**
 * React Native-specific i18n utilities
 */

/**
 * Detects the device language on React Native
 */
export function detectDeviceLanguage(
  supportedLanguages: string[],
  defaultLanguage: string,
): string {
  try {
    // Get the device locale
    const deviceLanguage =
      Platform.OS === "ios"
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

    // Check if the device language or its base language is supported
    const languageTag = deviceLanguage.replace("_", "-");
    const baseLanguage = languageTag.split("-")[0];

    const match = supportedLanguages.find(
      (lang) => languageTag === lang || baseLanguage === lang,
    );

    return match || defaultLanguage;
  } catch (error) {
    console.warn("Failed to detect device language:", error);
    return defaultLanguage;
  }
}

/**
 * Utility to handle right-to-left languages in React Native
 */
export function isRTL(language: string): boolean {
  const rtlLanguages = ["ar", "he", "fa", "ur"];
  return (
    rtlLanguages.includes(language) ||
    rtlLanguages.includes(language.split("-")[0])
  );
}

/**
 * Preloads all necessary translations for React Native
 * (React Native typically bundles all translations rather than loading dynamically)
 */
export function preloadTranslations(
  i18nInstance: i18n,
  translations: Record<string, Record<string, object>>,
): void {
  Object.entries(translations).forEach(([language, namespaces]) => {
    Object.entries(namespaces).forEach(([namespace, content]) => {
      i18nInstance.addResourceBundle(language, namespace, content, true, true);
    });
  });
}
