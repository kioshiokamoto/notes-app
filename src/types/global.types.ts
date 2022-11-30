export type Status = "COMPLETED" | "LISTED" | "DELETED";

export interface Note {
  id: number;
  status: Status;
  description: string;
}
