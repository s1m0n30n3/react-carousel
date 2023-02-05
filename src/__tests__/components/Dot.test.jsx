import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Dot } from "components/dot";

describe("Dot", () => {
  test("renders correctly without props", () => {
    const component = renderer.create(<Dot />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders all props", () => {
    const component = renderer.create(
      <Dot size={12} color="#ffffff" radius={6} margin={3} isSelected />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
