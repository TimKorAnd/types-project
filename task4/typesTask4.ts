type Bas = {
  a: number;
  b: string;
  c: null;
  d: {
    a: string;
    b: null;
    c: number;
  };
};

type SomeObject = Record<string, unknown>;

type DeepWithoutNumbers<T extends SomeObject> = {
  [K in keyof T as T[K] extends number ? never : K]: T[K] extends SomeObject
    ? DeepWithoutNumbers<T[K]>
    : T[K];
};

type NestedBasWithoutNumbers = DeepWithoutNumbers<Bas>;

const testNestedBas: NestedBasWithoutNumbers = {
  //a: 1,
  b: "string",
  c: null,
  d: {
    a: "string",
    b: null,
    //c: 88,
  },
};
/**
 * Should output type
 * {
 *  b: string;
 *  c: null;
 *  d: {
 *      a: string;
 *      b: null;
 *  };
 * };
 */
