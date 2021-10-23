/*type Bar = {
  a: number;
  b: string;
  c: null;
  d: Record<string, unknown>;
  e: number;
  f: string | number;
};

type WithoutnNumbers2<T extends Record<string, unknown>> = unknown;

type Baz2 = WithoutnNumbers2<Bar>;

/!**
 * Should output type
 * {
 *  b: string;
 *  c: null;
 *  d: Record<string, unknown>;
 *  f: string;
 * }
 *!/*/
