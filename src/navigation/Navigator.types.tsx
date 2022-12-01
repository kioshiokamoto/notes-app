// Navigator types and interfaces
import { NavigatorScreenParams } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { HomeParams } from "screens/Home/Home.screen.types";
import { NoteParams } from "screens/Note/Note.screen.types";

// Component props
export interface NavigatorProps {}

// Navigator screens and screens params
export type NavigatorScreens = {
  HomeScreen?: HomeParams;
  NoteScreen?: NoteParams;
};

export type RootNavigatorPropList = StackNavigationProp<NavigatorScreens>;
