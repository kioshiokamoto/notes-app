import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import GlobalProvider from "contexts/global/global.context";
import { ProvidersProps as Props } from "./Providers.types";
import ThemeProvider from "contexts/theme/theme.context";

const Providers: React.FC<Props> = (props) => {
  return (
    <ThemeProvider>
      <GlobalProvider>{props.children}</GlobalProvider>
    </ThemeProvider>
  );
};

Providers.defaultProps = {};

export default Providers;
