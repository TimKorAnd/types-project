type Foo = {
  a: number;
  b: string;
  c: null;
  d: Record<string, unknown>;
  e: number;
};

/*type WithoutNumbers<T extends Record<string, unknown>> = {
  [K in keyof T as (T[K] extends number ? never : K)]: T[K];
};*/

type WithoutNumbers<T extends Record<string, unknown>> = {
  [K in keyof T as T[K] extends number ? never : K]: T[K];
};
type Baz = WithoutNumbers<Foo>;
/**
 * Should output type
 * {
 *  b: string;
 *  c: null;
 *  d: Record<string, unknown>;
 * }
 */

const testBaz: Baz = {
  //a: 1,
  //g: "f",
  b: "bbb",
  c: null,
  d: { ddd: 42, ccc: 88 },
  //e: 2,
};
