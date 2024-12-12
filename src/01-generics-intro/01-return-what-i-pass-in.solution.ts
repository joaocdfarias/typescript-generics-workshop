import { Expect, Equal } from "../helpers/type-utils.ts";

const returnWhatIPassIn = <T>(t: T) => {
  return t;
};

const one = returnWhatIPassIn(1); //Type: <1>(t: 1) => 1
const matt = returnWhatIPassIn("matt"); //Type: <"matt">(t: "matt") => "matt"

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
