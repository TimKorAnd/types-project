enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);

const o = { X: 42, Y: 88 };
f(o);

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");

enum Fruit {
  Orange,
  Apple,
  Grape,
}
interface OrangeInterface {
  kind: Fruit.Orange;
  color: string;
}
interface AppleInterface {
  kind: Fruit.Apple;
  color: string;
}
class Orange implements OrangeInterface {
  kind: Fruit.Orange = Fruit.Orange;
  color: string = "orange";
}
class Apple implements AppleInterface {
  kind: Fruit.Apple = Fruit.Apple;
  color: string = "red";
}
let orange: Orange = new Orange();
let apple: Apple = new Apple();
console.log(apple);
