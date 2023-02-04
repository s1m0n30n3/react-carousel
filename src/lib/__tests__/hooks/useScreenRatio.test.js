import React from "react";
import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { useScreenRatio } from "hooks";

window.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

window.ResizeObserverEntry = {
  contentRect: {
    width: 1800,
  },
};

describe("useScreenRatio", () => {
  test("should return the default value of 800 ", () => {
    const ref = React.createRef();
    const { result } = renderHook(() => useScreenRatio({ ref }));

    expect(result.current).toBe(800);
  });
});
