// Interfaces and types from context Global

import { Note } from "types/global.types";

// Provider Props
export interface GlobalProviderProps {
  children: React.ReactNode;
}

// Provider value
export interface GlobalProviderValue {
  notes: Note[] | undefined;
  setNotes: React.Dispatch<React.SetStateAction<Note[] | undefined>>;
}
