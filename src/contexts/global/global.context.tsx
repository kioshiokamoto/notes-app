import React, { createContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GlobalProviderProps as Props } from "./global.context.types";
import { GlobalProviderValue } from "./global.context.types";
import { Note, NoteFilterStatus, Status } from "types/global.types";
import CONSTANTS from "config/constants";

const { NOTES } = CONSTANTS.STORAGE;

// @ts-ignore
export const GlobalContext = createContext<GlobalProviderValue>();

const GlobalProvider: React.FC<Props> = (props) => {
  const [notes, setNotes] = useState<Note[]>();
  const [filterByStatus, setFilterByStatus] = useState<NoteFilterStatus>("ALL");
  const [filterByText, setFilterByText] = useState("");

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

  const deleteNoteDefinitely = (id: string) => {
    setNotes((prev) => {
      const updatedNotes = prev?.filter((prevNote) => prevNote.id !== id);

      return updatedNotes;
    });
  };

  const restoreNote = (id: string) => {
    updateNote(id, { status: "LISTED" });
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => {
      const updatedNotes = prev?.map((prevNote) => {
        if (prevNote.id === id) {
          return {
            ...prevNote,
            status: "DELETED" as Status,
          };
        }

        return prevNote;
      });

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
    return {
      notes,
      setNotes,
      filterByStatus,
      setFilterByStatus,
      filterByText,
      setFilterByText,
      createNote,
      updateNote,
      deleteNote,
      deleteNoteDefinitely,
      restoreNote,
    };
  }, [
    notes,
    setNotes,
    filterByStatus,
    setFilterByStatus,
    filterByText,
    setFilterByText,
  ]);

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
