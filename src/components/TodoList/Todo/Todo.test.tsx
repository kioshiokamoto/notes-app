import React from "react";

import { render } from "setupTests";
import Todo from "./Todo";

describe("Todo", () => {
  it("renders with default props", () => {
    render(<Todo note={{ description: "", id: "", status: "COMPLETED" }} />);
  });
});
