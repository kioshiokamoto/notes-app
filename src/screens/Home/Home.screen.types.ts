// Interfaces and types from component Home
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface HomeProps {
  navigation: HomeNavigation;
  route: HomeRoute;
}

// Screen params
export interface HomeParams {}

// Screen navigation type
export type HomeNavigation = StackNavigationProp<
  NavigatorScreens,
  "HomeScreen"
>;

// Screen route type
export type HomeRoute = RouteProp<NavigatorScreens, "HomeScreen">;
