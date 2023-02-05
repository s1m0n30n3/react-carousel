import { act } from "react-dom/test-utils";
import { describe, expect, expectTypeOf, test, vi } from "vitest";

import { setElementRatio } from "helpers";

window.ResizeObserverEntry = {
  contentRect: {
    width: 1800,
  },
};

describe("setElementRatio function", () => {
  test("should return a `height` based on the element width", () => {
    expectTypeOf(setElementRatio).toBeFunction();
    expectTypeOf(setElementRatio).parameter(0).toMatchTypeOf();
  });
  test("should return a `height` based on the element width", () => {
    const callback = vi.fn();
    const ratio = [16, 9];
    const target = ResizeObserverEntry;

    act(() => setElementRatio({ callback, target, ratio }));

    const computedResult = (target.contentRect.width / ratio[0]) * ratio[1];
    const returnedResult = callback.calls[0][0];

    expect(callback).toBeCalled();
    expect(callback).toBeCalledTimes(1);
    expect(computedResult).toEqual(returnedResult);
  });
});
