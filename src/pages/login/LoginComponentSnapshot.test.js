import React from "react";
import renderer from "react-test-renderer";
import LoginComponent from "./LoginComponent";

it("renders the LoginComponent", () => {
  const tree = renderer.create(<LoginComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
