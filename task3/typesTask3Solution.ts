type Bar = {
  a: number;
  b: string;
  c: null;
  d: Record<string, unknown>;
  e: number;
  f: string | number;
};

type Check = number | string extends number ? true : false;
const check: Check = false;

/*
type WithoutNumbers2<T extends Record<string, unknown>> = {
  [K in keyof T as T[K] extends number ? never : K]: number extends T[K]
    ? Exclude<T[K], number>
    : T[K];
};
*/

type WithoutNumbers2<T extends Record<string, unknown>> = {
  [K in keyof T as T[K] extends number ? never : K]: Exclude<T[K], number>;
};

type Baz2 = WithoutNumbers2<Bar>;

const test1Baz2: Baz2 = {
  //a: 1,
  b: "bb",
  c: null,
  d: { dd: "dd" },
  //e: 42,
  f: "ff",
};

const test2Baz2: Baz2 = {
  //a: 1,
  b: "bb",
  c: null,
  d: { dd: "dd" },
  //e: 42,
  f: "88",
};

/**
 * Should output type
 * {
 *  b: string;
 *  c: null;
 *  d: Record<string, unknown>;
 *  f: string;
 * }
 */
