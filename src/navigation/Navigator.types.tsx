// Navigator types and interfaces
import { StackNavigationProp } from "@react-navigation/stack";
import { FilterParams } from "screens/Filter/Filter.screen.types";

import { HomeParams } from "screens/Home/Home.screen.types";
import { NoteParams } from "screens/Note/Note.screen.types";

// Component props
export interface NavigatorProps {}

// Navigator screens and screens params
export type NavigatorScreens = {
  HomeScreen?: HomeParams;
  NoteScreen?: NoteParams;
  FilterScreen?: FilterParams;
};

export type RootNavigatorPropList = StackNavigationProp<NavigatorScreens>;
