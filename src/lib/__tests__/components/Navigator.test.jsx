import React from "react";
import renderer, { act } from "react-test-renderer";
import { describe, expect, test, vi } from "vitest";

import {
  NavigationType,
  NavigationPosition,
  GalleryMode,
  CarouselAction,
} from "constants";
import { Navigator } from "components/navigator";

import { ReactComponent as ArrowIcon } from "assets/icons/chevron-right.svg";

describe("Navigator", () => {
  test("does not render if `navigationArrows.areArrowSet` is equal to `false`", () => {
    const component = renderer.create(
      <Navigator
        navigationArrows={{
          areArrowsSet: false,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render if `navigationArrows.areArrowSet` is equal to `true` and `navigationArrows.arrowIcon` is defined", () => {
    const component = renderer.create(
      <Navigator
        navigationArrows={{
          areArrowsSet: true,
          arrowIcon: ArrowIcon,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render if `navigationArrows.areArrowSet` is equal to `true`, `navigationArrows.arrowIcon` and all other props are defined", () => {
    const component = renderer.create(
      <Navigator
        navigationType={NavigationType.ARROWS_AND_DOTS}
        navigationPosition={NavigationPosition.CENTER}
        navigationWidth="100%"
        navigationSideMargin={14}
        onNavigate={() => vi.fn(() => vi.mock({ action: CarouselAction.PREV }))}
        imagesLength={5}
        currentIndex={4}
        galleryMode={GalleryMode.RETURN}
        navigationArrows={{
          areArrowsSet: true,
          arrowSize: 12,
          arrowIcon: ArrowIcon,
          arrowIconSize: 24,
          arrowColor: "#ffffff",
          arrowBackground: "#000000",
          arrowRounding: 16,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render if `galleryMode` is equal to `GalleryMode.BOUNDED` and `imageLength - 1` === `currentIndex`, right button should be disabled", () => {
    const component = renderer.create(
      <Navigator
        imagesLength={5}
        currentIndex={4}
        galleryMode={GalleryMode.BOUNDED}
        navigationArrows={{
          areArrowsSet: true,
          arrowSize: 12,
          arrowIcon: ArrowIcon,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree.children[1].props.style.transform).toBe("rotate(0deg)");
    expect(tree.children[1].props.disabled).toBe(true);
    expect(tree.children[0].props.style.transform).toBe("rotate(180deg)");
    expect(tree.children[0].props.disabled).not.toBe(true);
    expect(tree).toMatchSnapshot();
  });

  test("render if `galleryMode` is equal to `GalleryMode.BOUNDED` and `currentIndex` === `0`, left button should be disabled", () => {
    const component = renderer.create(
      <Navigator
        imagesLength={5}
        currentIndex={0}
        galleryMode={GalleryMode.BOUNDED}
        navigationArrows={{
          areArrowsSet: true,
          arrowSize: 12,
          arrowIcon: ArrowIcon,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree.children[0].props.style.transform).toBe("rotate(180deg)");
    expect(tree.children[0].props.disabled).toBe(true);
    expect(tree.children[1].props.style.transform).toBe("rotate(0deg)");
    expect(tree.children[1].props.disabled).not.toBe(true);
    expect(tree).toMatchSnapshot();
  });

  test("render correctly and have the function `onClick` attached to first child `Arrow` component", () => {
    const component = renderer.create(
      <Navigator
        imagesLength={5}
        currentIndex={0}
        galleryMode={GalleryMode.BOUNDED}
        navigationArrows={{
          areArrowsSet: true,
          arrowSize: 12,
          arrowIcon: ArrowIcon,
        }}
        onNavigate={vi.fn()}
      />
    );

    const tree = component.toJSON();
    const { onNavigate } = component.toTree().props;
    const { onClick } = tree.children[0].props;

    act(() => onClick(() => onNavigate({ action: "prev" })));

    expect(onClick).toBeDefined();
    expect(onClick).toBeInstanceOf(Function);
    expect(onClick).toMatchSnapshot();
  });

  test("render correctly and have the function `onClick` attached to second child `Arrow` component", () => {
    const component = renderer.create(
      <Navigator
        imagesLength={5}
        currentIndex={0}
        galleryMode={GalleryMode.BOUNDED}
        navigationArrows={{
          areArrowsSet: true,
          arrowSize: 12,
          arrowIcon: ArrowIcon,
        }}
        onNavigate={vi.fn()}
      />
    );

    const tree = component.toJSON();
    const { onNavigate } = component.toTree().props;
    const { onClick } = tree.children[1].props;

    act(() => onClick(() => onNavigate({ action: "next" })));

    expect(onClick).toBeDefined();
    expect(onClick).toBeInstanceOf(Function);
    expect(onClick).toMatchSnapshot();
  });
});
