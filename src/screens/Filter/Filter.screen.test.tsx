import React from "react";

import { render } from "setupTests";
import { buildStackNavigation } from "utils/builders/navigation.builder";
import { buildRoute } from "utils/builders/navigation.builder";
import Filter from "./Filter.screen";
import { FilterRoute } from "./Filter.screen.types";

describe("Filter screen", () => {
  it("renders without crashing", () => {
    render(
      <Filter
        navigation={buildStackNavigation()}
        route={buildRoute<FilterRoute>({ name: "FilterScreen" })}
      />
    );
  });
});
