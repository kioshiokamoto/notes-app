export type Status = "COMPLETED" | "LISTED" | "DELETED";

export interface Note {
  id: string;
  status: Status;
  description: string;
}

export type NoteFilterStatus = Status | "ALL";

export interface NoteFilterStatusGroup {
  id: number;
  status: NoteFilterStatus;
  name: string;
}
