import { it, expect, describe } from "vitest";
import { degreeConvertor } from "./degreeConvertor";

describe("degreeConvertor", () => {
  it("should convert celsius to fahrenheit", () => {
    const result = degreeConvertor(false, 25);

    expect(result).toBe(77);
  });

  it("should return the same value if isCelsius is true", () => {
    const result = degreeConvertor(true, 25);

    expect(result).toBe(25);
  });
});
