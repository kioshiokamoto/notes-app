// Interfaces and types from context Global

import { Note, NoteFilterStatus } from "types/global.types";

// Provider Props
export interface GlobalProviderProps {
  children: React.ReactNode;
}

// Provider value
export interface GlobalProviderValue {
  notes: Note[] | undefined;
  setNotes: React.Dispatch<React.SetStateAction<Note[] | undefined>>;
  filterByStatus: NoteFilterStatus;
  setFilterByStatus: React.Dispatch<React.SetStateAction<NoteFilterStatus>>;
  filterByText: string;
  setFilterByText: React.Dispatch<React.SetStateAction<string>>;
  createNote: (payload: Note) => void;
  updateNote: (
    id: string,
    payload: Partial<Pick<Note, "description" | "status">>
  ) => void;
  deleteNote: (id: string) => void;
  deleteNoteDefinitely: (id: string) => void;
  restoreNote: (id: string) => void;
}
