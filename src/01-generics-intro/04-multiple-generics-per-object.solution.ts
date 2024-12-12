import { expect } from "jsr:@std/expect";
import { Expect, Equal } from "../helpers/type-utils.ts";

const returnBothOfWhatIPassIn = <T, K>(params: { a: T; b: K }) => {
  return {
    first: params.a,
    second: params.b,
  };
};

Deno.test("Should return an object where a -> first and b -> second", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual({
    first: "a",
    second: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        first: string;
        second: number;
      }
    >
  >;
});
