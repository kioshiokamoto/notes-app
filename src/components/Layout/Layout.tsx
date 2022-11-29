import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { lockAsync, OrientationLock } from "expo-screen-orientation";

import styles from "./Layout.styles";
import { LayoutProps as Props } from "./Layout.types";

const Layout: React.FC<Props> = (props) => {
  useEffect(() => {
    lockAsync(OrientationLock.PORTRAIT_UP);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar
          translucent
          backgroundColor={EStyleSheet.value("$palette.background")}
          barStyle="light-content"
        />
        {props.children}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

Layout.defaultProps = {};

export default Layout;
