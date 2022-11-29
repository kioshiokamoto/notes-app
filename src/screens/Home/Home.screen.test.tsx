import React from "react";

import { render } from "setupTests";
import { buildStackNavigation } from "utils/builders/navigation.builder";
import { buildRoute } from "utils/builders/navigation.builder";
import Home from "./Home.screen";
import { HomeRoute } from "./Home.screen.types";

describe("Home screen", () => {
  it("renders without crashing", () => {
    render(
      <Home
        navigation={buildStackNavigation()}
        route={buildRoute<HomeRoute>({ name: "HomeScreen" })}
      />
    );
  });
});
