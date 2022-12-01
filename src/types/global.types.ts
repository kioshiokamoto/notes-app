export type Status = "COMPLETED" | "LISTED" | "DELETED";

export interface Note {
  id: string;
  status: Status;
  description: string;
}
