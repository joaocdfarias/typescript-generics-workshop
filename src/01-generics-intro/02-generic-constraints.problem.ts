import { Equal, Expect } from "../helpers/type-utils.ts";

export const returnWhatIPassIn = <T>(t: T) => t;

Deno.test("Should ONLY allow strings to be passed in", () => {
  const a = returnWhatIPassIn("a");

  type test1 = Expect<Equal<typeof a, "a">>;

  // @ts-expect-error
  returnWhatIPassIn(1);

  // @ts-expect-error
  returnWhatIPassIn(true);

  // @ts-expect-error
  returnWhatIPassIn({ foo: "bar" });
});
