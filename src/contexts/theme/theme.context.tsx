import React, { createContext, useMemo, useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import { ThemeProviderProps as Props } from "./theme.context.types";
import { Theme, ThemeTypes } from "./theme.context.types";
import { ThemeProviderValue } from "./theme.context.types";
import themes from "styles/theme";

// @ts-ignore
export const ThemeContext = createContext<ThemeProviderValue>({});

const defaultTheme = themes.light;
EStyleSheet.build(defaultTheme);

const ThemeProvider: React.FC<Props> = props => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [themeName, setThemeName] = useState<ThemeTypes>("light");

  const setThemeHandler = (themeName: ThemeTypes) => {
    const selectedTheme = themes[themeName];
    EStyleSheet.build(selectedTheme);
    setThemeName(themeName);
    setTheme(selectedTheme);
  };

  const value: ThemeProviderValue = useMemo(() => {
    return { theme, setTheme: setThemeHandler, themeName };
  }, [theme, themeName]);

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
