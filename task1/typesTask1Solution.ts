/*
type Foo = {
  foo: 1;
  baz: 3 | 4;
};

type Bar = {
  bar: 3;
  baz: 4 | 5;
};

type Baz = Foo & Bar;
/!**
 * Outputs type
 * {
 *   foo: 1,
 *   bar: 3,
 *   baz: 4,
 * }
 *!/
/!*type FooBar<
  T extends Partial<Record<keyof U, number>>,
  U extends Partial<Record<keyof T, number>>
> = { [K in keyof T & keyof U]: T[K] & U[K] };*!/

type FooBar<
  T extends Record<string, unknown>,
  U extends Record<string, unknown>
> = keyof T & keyof U extends never
  ? never
  : { [K in keyof T & keyof U]: T[K] & U[K] };
/!**
 * Should outputs type
 * {
 *   baz: 4
 * }
 *!/

type Bazzzz = { [K in keyof Bar & keyof Foo]: Bar[K] | Foo[K] };
/!**
 * Should outputs type
 * {
 *   baz: 3, 4, 5
 * }
 *!/

const bar: Baz = {
  foo: 1,
  bar: 3,
  baz: 4,
};

const fooBar: FooBar<Foo, Bar> = {
  baz: 4,
};

const fooBar1: FooBar<Foo, Bar> = {
  baz: 4,
};

const bazz3: Bazzzz = {
  baz: 3,
};

const bazz4: Bazzzz = {
  baz: 4,
};

const bazz5: Bazzzz = {
  baz: 5,
};
*/

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
