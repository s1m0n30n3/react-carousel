import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { useLazyLoading } from "hooks";

describe("useLazyLoading", () => {
  test("should return `false` at initial stage", () => {
    const { result } = renderHook(() => useLazyLoading({ src: "image.png" }));

    expect(result.current.isLoaded).toBe(false);
  });
});
