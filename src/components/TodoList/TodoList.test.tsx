import React from "react";

import { render } from "setupTests";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("renders with default props", () => {
    render(<TodoList />);
  });
});