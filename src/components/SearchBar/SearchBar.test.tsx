import React from "react";

import { render } from "setupTests";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders with default props", () => {
    render(<SearchBar />);
  });
});