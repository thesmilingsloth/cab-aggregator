# @cab-aggregator/i18n

Internationalization configuration package for React and React Native applications in the Cab Aggregator monorepo.

## Features

- Configure i18next for both React and React Native apps
- Platform-specific language detection
- TypeScript support for translation keys
- Utility hooks for accessing translations
- Support for namespaced translations

## Installation

This package is part of the monorepo and should be available automatically.

If you need to install it manually:

```bash
yarn workspace your-app add @cab-aggregator/i18n
```

## Basic Usage

### Step 1: Create your translation files in your app

Organize your translations in a feature-based structure:

```
your-app/
└── translations/
    ├── en/
    │   ├── common.json
    │   ├── auth.json
    │   └── ...
    ├── fr/
    │   ├── common.json
    │   ├── auth.json
    │   └── ...
    └── ...
```

Example `common.json`:

```json
{
  "welcome": "Welcome to our app!",
  "buttons": {
    "save": "Save",
    "cancel": "Cancel"
  }
}
```

### Step 2: Set up i18n in your app

```tsx
// i18n.ts
import {
  createI18nInstance,
  formatTranslationResources,
} from "@cab-aggregator/i18n";

// Import your translation files
import enCommon from "./translations/en/common.json";
import enAuth from "./translations/en/auth.json";
import frCommon from "./translations/fr/common.json";
import frAuth from "./translations/fr/auth.json";

// Format your translations
const resources = formatTranslationResources({
  en: {
    common: enCommon,
    auth: enAuth,
  },
  fr: {
    common: frCommon,
    auth: frAuth,
  },
});

// Create i18n instance
const i18n = createI18nInstance({
  resources,
  supportedLanguages: ["en", "fr"],
  defaultLanguage: "en",
  platform: "react", // or 'react-native'
  namespaces: ["common", "auth"],
  defaultNamespace: "common",
  debug: process.env.NODE_ENV === "development",
});

export default i18n;
```

### Step 3: Wrap your app with the provider

```tsx
// App.tsx
import React from "react";
import { I18nProvider } from "@cab-aggregator/i18n";
import i18n from "./i18n";

function App() {
  return (
    <I18nProvider
      i18n={i18n}
      platform="react" // or 'react-native'
      supportedLanguages={["en", "fr"]}
      defaultLanguage="en"
    >
      {/* Your app components */}
    </I18nProvider>
  );
}

export default App;
```

### Step 4: Use translations in your components

```tsx
import React from "react";
import { useAppTranslation } from "@cab-aggregator/i18n";

function Welcome() {
  const { t } = useAppTranslation("common");

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button>{t("buttons.save")}</button>
    </div>
  );
}

export default Welcome;
```

## Working with Multiple Namespaces

```tsx
import React from "react";
import { useMultipleNamespaces } from "@cab-aggregator/i18n";

function LoginForm() {
  const { t } = useMultipleNamespaces(["common", "auth"]);

  return (
    <form>
      <h2>{t("auth:login.title")}</h2>
      <button type="submit">{t("common:buttons.submit")}</button>
    </form>
  );
}
```

## Changing Languages

```tsx
import React from "react";
import { useLanguage } from "@cab-aggregator/i18n";

function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  return (
    <div>
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {availableLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
```

## Type Safety

Define types for your translations to get type checking:

```tsx
// types/i18n.d.ts
import { TypedTFunction } from "@cab-aggregator/i18n";

type Namespaces = "common" | "auth";

interface Translations {
  common: {
    welcome: string;
    buttons: {
      save: string;
      cancel: string;
    };
  };
  auth: {
    login: {
      title: string;
      username: string;
      password: string;
    };
  };
}

declare module "@cab-aggregator/i18n" {
  export function useAppTranslation(namespace?: Namespaces): {
    t: TypedTFunction<Namespaces, Translations>;
    i18n: i18n;
    ready: boolean;
  };
}
```

## Advanced Usage for React Native

For React Native apps, you should preload all translations at startup:

```tsx
// i18n.ts for React Native
import {
  createI18nInstance,
  formatTranslationResources,
  preloadTranslations,
} from "@cab-aggregator/i18n";

// Import translations
import { translations } from "./translations";

// Format resources
const resources = formatTranslationResources(translations);

// Create instance
const i18n = createI18nInstance({
  resources,
  supportedLanguages: ["en", "fr"],
  defaultLanguage: "en",
  platform: "react-native",
  namespaces: ["common", "auth"],
});

// Preload all translations (React Native specific)
preloadTranslations(i18n, resources);

export default i18n;
```

## License

Internal use only.
