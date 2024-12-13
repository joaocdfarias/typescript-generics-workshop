import { expect } from "jsr:@std/expect";
import { Equal, Expect } from "../helpers/type-utils.ts";

export const concatenateFirstNameAndLastName = <
  T extends { firstName: string; lastName: string }
>(
  user: T
) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

Deno.test(
  "Should add fullName to an object which only contains firstName and lastName",
  () => {
    const users = [
      {
        firstName: "Matt",
        lastName: "Pocock",
      },
    ];

    const newUsers = users.map(concatenateFirstNameAndLastName);

    expect(newUsers).toEqual([
      {
        firstName: "Matt",
        lastName: "Pocock",
        fullName: "Matt Pocock",
      },
    ]);

    type tests = [
      Expect<
        Equal<
          typeof newUsers,
          Array<{ firstName: string; lastName: string } & { fullName: string }>
        >
      >
    ];
  }
);

Deno.test("Should retain other properties passed in", () => {
  const users = [
    {
      id: 1,
      firstName: "Matt",
      lastName: "Pocock",
    },
  ];

  const newUsers = users.map(concatenateFirstNameAndLastName);

  expect(newUsers).toEqual([
    {
      id: 1,
      firstName: "Matt",
      lastName: "Pocock",
      fullName: "Matt Pocock",
    },
  ]);

  type tests = [
    Expect<
      Equal<
        typeof newUsers,
        Array<
          { id: number; firstName: string; lastName: string } & {
            fullName: string;
          }
        >
      >
    >
  ];
});

Deno.test(
  "Should fail when the object passed in does not contain firstName",
  () => {
    const users = [
      {
        firstName: "Matt",
      },
    ];

    const newUsers = users.map(
      // @ts-expect-error
      concatenateFirstNameAndLastName
    );
  }
);