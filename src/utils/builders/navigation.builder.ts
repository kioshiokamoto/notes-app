// React navigation builders
import { NavigationAction } from "@react-navigation/native";
import { StackNavigationState } from "@react-navigation/native";
import { PartialState } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/routers";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigationOptions } from "@react-navigation/stack";

export const buildRoute = <T>(overrides: Partial<T> = {}) => {
  return {
    key: "",
    name: "",
    params: {},
    ...overrides,
  };
};

export const buildStackNavigation = <
  T extends ParamListBase,
  U extends keyof T = keyof T
>(
  overrides: Partial<StackNavigationProp<T, U>> = {}
): StackNavigationProp<T, U> => {
  return {
    dispatch: (
      action:
        | NavigationAction
        | ((state: StackNavigationState<any>) => NavigationAction)
    ) => {},
    navigate: ((
      route:
        | { key: string; params?: any }
        | { name: any; key?: string | undefined; params: any }
    ) => {}) as any,
    reset: (
      state: StackNavigationState<any> | PartialState<StackNavigationState<any>>
    ) => {},
    goBack: () => {},
    isFocused: () => true,
    canGoBack: () => false,
    setParams: (params: Partial<any> | undefined) => {},
    setOptions: (options: Partial<StackNavigationOptions>) => {},
    getParent: (() => {}) as any,
    getState: (() => {}) as any,
    addListener: (() => {}) as any,
    removeListener: (() => {}) as any,
    replace: (() => {}) as any,
    push: (() => {}) as any,
    pop: (() => {}) as any,
    popToTop: (() => {}) as any,
    getId: () => "",
    ...overrides,
  };
};
