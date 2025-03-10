import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { i18n } from "i18next";

import { Platform } from "./config";
import { detectBrowserLanguage, setHtmlLang } from "./platform/react";
import { detectDeviceLanguage, isRTL } from "./platform/react-native";

interface I18nProviderProps {
  children: React.ReactNode;
  i18n: i18n;
  platform: Platform;
  supportedLanguages: string[];
  defaultLanguage: string;
  setDirectionForRTL?: boolean;
}

/**
 * Provider component that wraps your app with i18n context
 */
export function I18nProvider({
  children,
  i18n,
  platform,
  supportedLanguages,
  defaultLanguage,
  setDirectionForRTL = true,
}: I18nProviderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize with platform-specific language detection
    const detectedLanguage =
      platform === Platform.REACT
        ? detectBrowserLanguage(supportedLanguages, defaultLanguage)
        : detectDeviceLanguage(supportedLanguages, defaultLanguage);

    // Set the language
    i18n.changeLanguage(detectedLanguage).then(() => {
      setIsReady(true);

      // Set HTML lang attribute for web
      if (platform === Platform.REACT) {
        setHtmlLang(i18n.language);
      }

      // Handle RTL setup for React Native if needed
      if (platform === Platform.REACT_NATIVE && setDirectionForRTL) {
        // This would typically update the app's layout direction
        // How this is implemented depends on your navigation solution
        const isRightToLeft = isRTL(i18n.language);
        console.log("Language direction:", isRightToLeft ? "RTL" : "LTR");
        // You would typically use this value to configure your navigation container
      }
    });
  }, []);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      if (platform === Platform.REACT) {
        setHtmlLang(lng);
      }

      if (platform === Platform.REACT_NATIVE && setDirectionForRTL) {
        const isRightToLeft = isRTL(lng);
        console.log(
          "Language direction changed:",
          isRightToLeft ? "RTL" : "LTR",
        );
        // Update app direction as needed
      }
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n, platform, setDirectionForRTL]);

  // For React Native, don't use suspense as it doesn't work well there
  if (platform === Platform.REACT_NATIVE) {
    if (!isReady) {
      // You could render a loading indicator here
      return null;
    }
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
