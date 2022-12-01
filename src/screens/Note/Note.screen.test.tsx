import React from "react";

import { render } from "setupTests";
import { buildStackNavigation } from "utils/builders/navigation.builder";
import { buildRoute } from "utils/builders/navigation.builder";
import Note from "./Note.screen";
import { NoteRoute } from "./Note.screen.types";

describe("Note screen", () => {
  it("renders without crashing", () => {
    render(
      <Note
        navigation={buildStackNavigation()}
        route={buildRoute<NoteRoute>({ name: "Note" })}
      />
    );
  });
});
