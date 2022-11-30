import React, { createContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GlobalProviderProps as Props } from "./global.context.types";
import { GlobalProviderValue } from "./global.context.types";
import { Note } from "types/global.types";
import CONSTANTS from "config/constants";

const { NOTES } = CONSTANTS.STORAGE;

// @ts-ignore
export const GlobalContext = createContext<GlobalProviderValue>();

const GlobalProvider: React.FC<Props> = (props) => {
  const [notes, setNotes] = useState<Note[]>();

  useEffect(() => {
    (async () => {
      const storagedNotes = await AsyncStorage.getItem(NOTES);
      const parsedNotes: Note[] | undefined = storagedNotes
        ? JSON.parse(storagedNotes)
        : undefined;

      setNotes(parsedNotes);
    })();
  }, []);

  const value: GlobalProviderValue = useMemo(() => {
    return { notes, setNotes };
  }, [notes, setNotes]);

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
