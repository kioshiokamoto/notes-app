// Interfaces and types from component Note
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface NoteProps {
  navigation: NoteNavigation;
  route: NoteRoute;
}

// Screen params
export interface NoteParams {
  id?: string;
}

// Screen navigation type
export type NoteNavigation = StackNavigationProp<
  NavigatorScreens,
  "NoteScreen"
>;

// Screen route type
export type NoteRoute = RouteProp<NavigatorScreens, "NoteScreen">;
