import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { ReactComponent as ArrowIcon } from "assets/icons/chevron-right.svg";

import { Arrow } from "components/arrow";

describe("Arrow", () => {
  test("renders correctly by passing `arrowIcon` required prop", () => {
    const component = renderer.create(<Arrow icon={ArrowIcon} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("renders correctly by passing `arrowIcon` required prop and other props", () => {
    const component = renderer.create(
      <Arrow
        direction="left"
        background="#ffffff"
        icon={ArrowIcon}
        iconSize={24}
        size={32}
        radius={16}
        color="#000000"
      />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
