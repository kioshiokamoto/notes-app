import React, { createContext, useMemo } from "react";

import { GlobalProviderProps as Props } from "./global.context.types";
import { GlobalProviderValue } from "./global.context.types";

// @ts-ignore
export const GlobalContext = createContext<GlobalProviderValue>();

const GlobalProvider: React.FC<Props> = (props) => {
  const value: GlobalProviderValue = useMemo(() => {
    return {};
  }, []);

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
