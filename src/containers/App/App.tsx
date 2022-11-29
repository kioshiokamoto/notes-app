import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AppProps as Props } from "./App.types";
import Providers from "containers/Providers/Providers";
import { fonts } from "utils/fonts.utils";
import Navigator from "navigation/Navigator";

const App: React.FC<Props> = (props) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts
        await Font.loadAsync(fonts);
        // Artificially delay for two seconds to simulate a slow loading
        // experience.
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Providers>
        <Navigator />
      </Providers>
    </View>
  );
};

App.defaultProps = {};

export default App;
