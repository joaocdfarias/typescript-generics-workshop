import { Equal, Expect } from "../helpers/type-utils.ts";

export const returnWhatIPassIn = <T extends string>(t: T) => t;

Deno.test("Should ONLY allow strings to be passed in", () => {
  const a = returnWhatIPassIn("a");

  type test1 = Expect<Equal<typeof a, "a">>;

  // @ts-expect-error: type should be of type string
  returnWhatIPassIn(1);

  // @ts-expect-error: type should be of type string
  returnWhatIPassIn(true);

  // @ts-expect-error: type should be of type string
  returnWhatIPassIn({ foo: "bar" });
});
