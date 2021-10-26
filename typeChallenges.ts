/*interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<Type, Keys> = {
  [K in keyof Type as Keys extends K ? K : never]: Type[K];
};

type PickPick = Pick<Todo, "title" | "completed">;

/!*type MyPick<Type, Keys extends keyof Type> = { [K in Keys]: Type[K] };*!/

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

type MyExclude<T, U> = T extends U ? never : T;

type DistributedExclude =
  | ("a" extends "a" ? never : "a")
  | ("b" extends "a" ? never : "b")
  | ("c" extends "a" ? never : "c");

type T0 = MyExclude<"a" | "b" | "c", "a">;*/

/*interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

const todo1: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo1.title = "Hello"; // Error: cannot reassign a readonly property
todo1.description = "barFoo"; // Error: cannot reassign a readonly property*/

/*
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type T = typeof tuple extends Array<infer Item> ? Item : never;

type TupleToObject<T extends readonly string[]> = {
  [K in T[number]]: K;
};

const result = TupleToObject<typeof tuple> = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};*/

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T extends any[]> = T[0];
type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
