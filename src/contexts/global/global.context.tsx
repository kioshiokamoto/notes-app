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

  const createNote = (payload: Note) => {
    setNotes((prev) => {
      if (prev) {
        return [...prev, payload];
      }

      return [payload];
    });
  };

  const updateNote = (
    id: string,
    payload: Partial<Pick<Note, "description" | "status">>
  ) => {
    setNotes((prev) => {
      const updatedNotes = prev?.map((prevNote) => {
        if (prevNote.id === id) {
          return {
            ...prevNote,
            ...payload,
          };
        }

        return prevNote;
      });

      return updatedNotes;
    });
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => {
      const updatedNotes = prev?.filter((prevNote) => prevNote.id !== id);

      return updatedNotes;
    });
  };

  useEffect(() => {
    (async () => {
      const storagedNotes = await AsyncStorage.getItem(NOTES);
      const parsedNotes: Note[] | undefined = storagedNotes
        ? JSON.parse(storagedNotes)
        : undefined;

      setNotes(parsedNotes);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!notes) return;
      await AsyncStorage.setItem(NOTES, JSON.stringify(notes));
    })();
  }, [notes]);

  const value: GlobalProviderValue = useMemo(() => {
    return { notes, setNotes, createNote, updateNote, deleteNote };
  }, [notes, setNotes]);

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
