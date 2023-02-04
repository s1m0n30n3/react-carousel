import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Root } from "../../components/root";

describe("Root", () => {
  test("component renders correctly without props", () => {
    const component = renderer.create(<Root />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
