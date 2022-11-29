import { useContext } from "react";

import { ThemeContext } from "./theme.context";
import { ThemeProviderValue } from "./theme.context.types";

const useTheme = () => {
  return useContext<ThemeProviderValue>(ThemeContext);
};

export default useTheme;
