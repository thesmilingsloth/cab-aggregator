# Using TypeScript with i18n in Your Apps

This guide demonstrates how to set up proper TypeScript typings for your translations.

## Step 1: Create a Type Declaration File

In your app, create an `i18n.d.ts` file:

```typescript
// src/i18n.d.ts
import "i18next";

/**
 * Define the structure of your translation resources
 */
interface AppResources {
  common: {
    appName: string;
    buttons: {
      save: string;
      cancel: string;
    };
    // ... other common translations
  };
  auth: {
    login: {
      title: string;
      email: string;
      password: string;
      // ... other login translations
    };
    // ... other auth translations
  };
  // ... other namespaces
}

/**
 * Extend i18next's type system
 */
declare module "i18next" {
  interface CustomTypeOptions {
    // Default namespace
    defaultNS: "common";
    // Your resource structure
    resources: AppResources;
  }
}
```

## Step 2: Use TypeScript with Translations

In your components, use the `useTranslation` hook directly from `react-i18next`:

```tsx
import React from "react";
import { View, Text } from "react-native";
import { useTranslation } from "@repo/i18n";

function LoginScreen() {
  // Specify the namespace you want to use by default
  const { t } = useTranslation("auth");

  return (
    <View>
      {/* TypeScript knows this exists in the auth namespace */}
      <Text>{t("login.title")}</Text>

      {/* You can also access other namespaces */}
      <Text>{t("common:buttons.save")}</Text>
    </View>
  );
}
```

## Intellisense Features

With this setup, you get:

1. **Autocomplete** for all translation keys
2. **Type checking** to prevent typos and missing translations
3. **Hover information** showing the full path of each key

## Using Multiple Namespaces

If you need multiple namespaces, you can specify them in the hook:

```tsx
// Load multiple namespaces at once
const { t } = useTranslation(["common", "auth"]);

// Now you can use both namespaces without prefixes
t("buttons.save"); // from common
t("login.title"); // from auth

// Or with explicit prefixes
t("common:buttons.save");
t("auth:login.title");
```

## Dynamic Namespaces

For dynamic namespace loading:

```tsx
import { useTranslation } from "react-i18next";

function ProfileScreen() {
  const { t, i18n } = useTranslation("common");

  // Load another namespace when needed
  useEffect(() => {
    i18n.loadNamespaces("profile");
  }, []);

  return (
    <View>
      <Text>{t("profile:details.title")}</Text>
    </View>
  );
}
```

## Type Safety with Parameters

For translations with parameters:

```tsx
// In your translations:
// { "welcome": "Welcome, {{name}}!" }

// In your component:
t("welcome", { name: "User" }); // TypeScript knows this is valid
```
