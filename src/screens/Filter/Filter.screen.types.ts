// Interfaces and types from component Filter
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface FilterProps {
  navigation: FilterNavigation;
  route: FilterRoute;
}

// Screen params
export interface FilterParams {}

// Screen navigation type
export type FilterNavigation = StackNavigationProp<
  NavigatorScreens,
  "FilterScreen"
>;

// Screen route type
export type FilterRoute = RouteProp<NavigatorScreens, "FilterScreen">;
