class GenericClass<T> {
  static staticValue: string;
  readonly value: T;
  constructor(v: T) {
    this.value = v;
  }
}

interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends { length: unknown }>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
//getProperty(x, "m");

function fabricFunc<T>(c: new () => T): T {
  return new c();
}

function fabricFunc1<T>(c: { new (): T }): T {
  return new c();
}

class MyClass {
  getN: (n: never) => number = (n: never): number => 42;
}
const mc = new MyClass();
let n: any = "";
mc.getN(n);

class OtherClass {}

interface ISuperInterface extends MyClass, OtherClass {}

export interface IExample<T extends ISuperInterface> {
  getById(id: number): T;
}
