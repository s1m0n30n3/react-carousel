import React from "react";
import renderer, { act } from "react-test-renderer";
import { describe, expect, test, vi } from "vitest";

import { DotNavigator } from "components/dot-navigator";

const dotConfig = {
  areSet: true,
  position: "bottom",
  size: 12,
  color: "#efefef",
  radius: 6,
  spacing: 2,
};

describe("DotNavigator", () => {
  test("return `null` when `dotsNavigation.areDotsSet` prop is `false`", () => {
    const component = renderer.create(
      <DotNavigator
        dots={{
          areSet: false,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("render correctly when `dotsNavigation.areDotsSet` prop is `true`", () => {
    const component = renderer.create(
      <DotNavigator
        dots={{
          areSet: true,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("render correctly when `dotsNavigation.areDotsSet` prop is `true` and other props are defined", () => {
    const component = renderer.create(
      <DotNavigator
        imagesLength={8}
        onClick={() => vi.fn()}
        dots={dotConfig}
        currentIndex={1}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render correctly and have the function `onClick` attached to `Dot` component", () => {
    const component = renderer.create(
      <DotNavigator
        imagesLength={8}
        onClick={() => vi.fn()}
        dots={dotConfig}
        currentIndex={1}
        setGalleryIndex={vi.fn()}
      />
    );

    const tree = component.toJSON();
    const { setGalleryIndex } = component.toTree().props;
    const { onClick } = tree.children[0].props;

    act(() => onClick(() => setGalleryIndex()));

    expect(onClick).toBeDefined();
    expect(onClick).toBeInstanceOf(Function);
    expect(onClick).toMatchSnapshot();
  });
});
