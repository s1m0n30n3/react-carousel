import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { CarouselMask } from "components/carousel-mask";

describe("CarouselMask", () => {
  test("component renders correctly without props", () => {
    const component = renderer.create(<CarouselMask />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
