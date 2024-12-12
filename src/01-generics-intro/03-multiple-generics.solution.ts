import { expect } from "jsr:@std/expect";
import { Equal, Expect } from "../helpers/type-utils.ts";

const returnBothOfWhatIPassIn = <T, K>(a: T, b: K) => {
  return {
    a,
    b,
  };
};

Deno.test("Should return an object of the arguments you pass", () => {
  const result = returnBothOfWhatIPassIn("a", 1);

  expect(result).toEqual({ a: "a", b: 1 });

  type test1 = Expect<Equal<typeof result, { a: string; b: number }>>;
});
