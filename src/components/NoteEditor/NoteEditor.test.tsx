import React from "react";

import { render } from "setupTests";
import NoteEditor from "./NoteEditor";

describe("NoteEditor", () => {
  it("renders with default props", () => {
    render(<NoteEditor />);
  });
});