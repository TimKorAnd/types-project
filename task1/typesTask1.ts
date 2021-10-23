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

type FooBar = never;
/!**
 * Should outputs type
 * {
 *   baz: 4
 * }
 *!/

type Bazzzz = never;
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

const fooBar: FooBar = {
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
