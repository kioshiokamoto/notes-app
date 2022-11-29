// Navigator helper functions and data
import { createNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigatorScreens } from "./Navigator.types";

export const navigationRef = createNavigationContainerRef<NavigatorScreens>();

export const Stack = createStackNavigator<NavigatorScreens>();
