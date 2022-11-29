import { NavigationContainer } from "@react-navigation/native";
import React, { useRef } from "react";
import { Text } from "react-native";

import HomeScreen from "screens/Home/Home.screen";
import { navigationRef, Stack } from "./Navigator.helpers";
import { NavigatorProps as Props } from "./Navigator.types";

const Navigator: React.FC<Props> = (props) => {
  const renderScreens = () => {
    return screens;
  };

  const modals = (
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <></>
    </Stack.Group>
  );

  const transparentModals = (
    <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
      <></>
    </Stack.Group>
  );

  const screens = (
    <>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      {modals}
      {transparentModals}
    </>
  );

  return (
    <NavigationContainer ref={navigationRef} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

Navigator.defaultProps = {};

export default Navigator;
