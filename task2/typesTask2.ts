/*
type Foo = {
  a: number;
  b: string;
  c: null;
  d: Record<string, unknown>;
  e: number;
};

type WithoutNumbers<T extends Record<string, unknown>> = unknown;

type Baz = WithoutNumbers<Foo>;
/!**
 * Should output type
 * {
 *  b: string;
 *  c: null;
 *  d: Record<string, unknown>;
 * }
 *!/
*/
