import React from "react";
import renderer from "react-test-renderer";
import { UIKittenProvider } from "../../utils";
import Home from "./Home";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <UIKittenProvider>
        <Home />
      </UIKittenProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
