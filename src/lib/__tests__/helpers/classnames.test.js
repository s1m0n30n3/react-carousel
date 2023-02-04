import { describe, expect, test } from "vitest";

import { classNames } from "helpers";

describe("classNames function", () => {
  test("should concatenate string array in a single string separated by a space", () => {
    const input = ["a", "b"];
    const output = "a b";
    expect(classNames(input)).toBe(output);
  });
  test("should discard any array element different than a string", () => {
    const input = ["a", true, 0, Symbol, [], {}];
    const output = "a";
    expect(classNames(input)).toBe(output);
  });
  test("should discard any array entry equal to empty string", () => {
    const input = ["a", "", "", "", ""];
    const output = "a";
    expect(classNames(input)).toBe(output);
  });
});
