// Interfaces and types from context Theme
import themes from "styles/theme";

// Provider Props
export interface ThemeProviderProps {
  children: React.ReactNode;
}

// Provider value
export interface ThemeProviderValue {
  theme: Theme;
  setTheme: (themeName: ThemeTypes) => void;
  themeName: ThemeTypes;
}

export type ThemeTypes = keyof typeof themes;

export type Theme = typeof themes["light"];
