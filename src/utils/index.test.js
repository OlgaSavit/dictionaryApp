import { describe, expect, it } from "vitest";

import { getFirstLetter } from "./normalize";

describe("checkGetFirstLetter", () => {
  it("should return null if data is empty", () => {
    expect(getFirstLetter("")).toBe(null);
  });
  it("should return O if data is Olga", () => {
    expect(getFirstLetter("Olga")).toBe("O");
  });
  it("should return O if data is Olga", () => {
    expect(getFirstLetter("olga")).toBe("O");
  });
});
