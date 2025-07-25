import { colors as colorsLight } from "./colors";
import { colors as colorsDark } from "./colorsDark";
import { spacing as spacingLight } from "./spacing";
import { timing } from "./timing";

// This supports "light" and "dark" themes by default. If undefined, it'll use the system theme
export type ThemeContexts = "light" | "dark" | undefined;

// Because we have two themes, we need to define the types for each of them.
// colorsLight and colorsDark should have the same keys, but different values.
export type Colors = typeof colorsLight | typeof colorsDark;
// The spacing type needs to take into account the different spacing values for light and dark themes.
export type Spacing = typeof spacingLight;

// These two are consistent across themes.
export type Timing = typeof timing;

// The overall Theme object should contain all of the data you need to style your app.
export interface Theme {
  colors: Colors;
  spacing: Spacing;
  timing: Timing;
  isDark: boolean;
}

// Here we define our themes.
export const lightTheme: Theme = {
  colors: colorsLight,
  spacing: spacingLight,
  timing,
  isDark: false,
};
export const darkTheme: Theme = {
  colors: colorsDark,
  spacing: spacingLight,
  timing,
  isDark: true,
};

// Export the theme objects with backwards compatibility for the old theme structure.
export { colorsLight as colors };
export { colorsDark };
export { spacingLight as spacing };

export * from "./timing";
