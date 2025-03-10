# App-Specific Translation Setup

This example shows how to structure and implement translations for a specific app in the monorepo.

## Directory Structure

For a React app:

```
apps/web-app/
└── translations/
    ├── en/
    │   ├── common.json
    │   ├── auth.json
    │   ├── dashboard.json
    │   └── settings.json
    └── fr/
        ├── common.json
        └── ...
```

For a React Native app:

```
apps/mobile-app/
└── translations/
    ├── en/
    │   ├── common.json
    │   ├── auth.json
    │   └── ...
    └── es/
        ├── common.json
        └── ...
```

## Translation Files Example

**en/common.json**:

```json
{
  "appName": "Cab Aggregator",
  "buttons": {
    "save": "Save",
    "cancel": "Cancel",
    "confirm": "Confirm",
    "back": "Back"
  },
  "errors": {
    "required": "This field is required",
    "invalidEmail": "Please enter a valid email",
    "networkError": "Network error. Please try again"
  },
  "loading": "Loading...",
  "success": "Success!"
}
```

**en/auth.json**:

```json
{
  "login": {
    "title": "Login",
    "email": "Email",
    "password": "Password",
    "forgotPassword": "Forgot Password?",
    "submit": "Login",
    "noAccount": "Don't have an account?",
    "signUp": "Sign Up"
  },
  "register": {
    "title": "Create Account",
    "name": "Full Name",
    "email": "Email",
    "password": "Password",
    "confirmPassword": "Confirm Password",
    "submit": "Create Account",
    "haveAccount": "Already have an account?",
    "login": "Login"
  }
}
```

## Setting up i18n in your App

For a React app:

```typescript
// apps/web-app/src/i18n.ts
import {
  createI18nInstance,
  formatTranslationResources,
} from "@cab-aggregator/i18n";

// Import all translation files
import enCommon from "../translations/en/common.json";
import enAuth from "../translations/en/auth.json";
import enDashboard from "../translations/en/dashboard.json";
import enSettings from "../translations/en/settings.json";

import frCommon from "../translations/fr/common.json";
import frAuth from "../translations/fr/auth.json";
import frDashboard from "../translations/fr/dashboard.json";
import frSettings from "../translations/fr/settings.json";

// Format the resources
const resources = formatTranslationResources({
  en: {
    common: enCommon,
    auth: enAuth,
    dashboard: enDashboard,
    settings: enSettings,
  },
  fr: {
    common: frCommon,
    auth: frAuth,
    dashboard: frDashboard,
    settings: frSettings,
  },
});

// List of available namespaces
const namespaces = ["common", "auth", "dashboard", "settings"];

// Create the i18n instance
const i18n = createI18nInstance({
  resources,
  supportedLanguages: ["en", "fr"],
  defaultLanguage: "en",
  platform: "react",
  namespaces,
  defaultNamespace: "common",
  debug: process.env.NODE_ENV === "development",
});

export default i18n;
```

For a React Native app:

```typescript
// apps/mobile-app/src/i18n.ts
import {
  createI18nInstance,
  formatTranslationResources,
  preloadTranslations,
} from "@cab-aggregator/i18n";

// Import all translation files
import enCommon from "../translations/en/common.json";
import enAuth from "../translations/en/auth.json";

import esCommon from "../translations/es/common.json";
import esAuth from "../translations/es/auth.json";

// Format the resources
const resources = formatTranslationResources({
  en: {
    common: enCommon,
    auth: enAuth,
  },
  es: {
    common: esCommon,
    auth: esAuth,
  },
});

// List of available namespaces
const namespaces = ["common", "auth"];

// Create the i18n instance
const i18n = createI18nInstance({
  resources,
  supportedLanguages: ["en", "es"],
  defaultLanguage: "en",
  platform: "react-native",
  namespaces,
  defaultNamespace: "common",
  debug: __DEV__,
});

// Preload all translations for React Native
preloadTranslations(i18n, resources);

export default i18n;
```

## Using in App Root

```tsx
// apps/web-app/src/App.tsx
import React from "react";
import { I18nProvider } from "@cab-aggregator/i18n";
import i18n from "./i18n";

function App() {
  return (
    <I18nProvider
      i18n={i18n}
      platform="react"
      supportedLanguages={["en", "fr"]}
      defaultLanguage="en"
    >
      {/* Your app content */}
    </I18nProvider>
  );
}

export default App;
```

## Usage in Components

```tsx
import React from "react";
import { useAppTranslation } from "@cab-aggregator/i18n";

function LoginPage() {
  const { t } = useAppTranslation("auth");

  return (
    <div>
      <h1>{t("login.title")}</h1>
      <form>
        <label>{t("login.email")}</label>
        <input type="email" />

        <label>{t("login.password")}</label>
        <input type="password" />

        <button type="submit">{t("login.submit")}</button>
      </form>
    </div>
  );
}

export default LoginPage;
```
