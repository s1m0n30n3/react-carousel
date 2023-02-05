import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Carousel } from "components/carousel";

describe("Carousel", () => {
  test("renders correctly without props", () => {
    const component = renderer.create(<Carousel />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
