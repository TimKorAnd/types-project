type Org = string;

type ProdDomain<O extends Org> = `www.${O}.some-service.com`;
type StageDomain<O extends Org> = `www.${O}.some-service-stage.com`;

type ProdDomainToStageDomain1 = <O extends string>(
  prodDomain: ProdDomain<O>
) => StageDomain<O>;

type ProdDomainToStageDomainWithCallSignature = {
  <O extends string>(prodDomain: ProdDomain<O>): StageDomain<O>;
};

type ProdDomainToStageDomainWithCallSignature1 = {
  <O extends Org>(prodDomain: ProdDomain<O>): StageDomain<O>;
};

type ProdDomainToStageDomain2 = <D extends string>(
  prodDomain: D
) => D extends ProdDomain<infer O> ? StageDomain<O> : never;

declare const prodDomainToStageDomain: ProdDomainToStageDomain2;

// with function type
declare const prodDomainToStageDomain1: <D extends string>(
  prodDomain: D
) => D extends ProdDomain<infer O> ? StageDomain<O> : never;

// WithCallSignature
declare const prodDomainToStageDomainWithCallSignature: {
  <D extends string>(prodDomain: D): D extends ProdDomain<infer O>
    ? StageDomain<O>
    : never;
};

const googleProdDomain = "www.google.some-service.com";
const appleProdDomain = "www.apple.some-service.com";
const facebookProdDomain = "www.facebook.some-service.com";

const googleStageDomain = prodDomainToStageDomain(googleProdDomain); // 'www.google.some-service-stage.com';
const appleStageDomain = prodDomainToStageDomain(appleProdDomain); // 'www.apple.some-service-stage.com';
const facebookStageDomain = prodDomainToStageDomain(facebookProdDomain); // 'www.facebook.some-service-stage.com';
const facebookStageDomaina = prodDomainToStageDomain("a"); // 'www.facebook.some-service-stage.com';

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}
identity.prop = "djdjd";

type GenericFnType<Type> = {
  fn: (arg: Type) => Type;
  prop: string;
};

type GenericFnTypeWODescription = Omit<GenericFnType<string>, "prop">;

const identityNever: GenericFnTypeWODescription = { fn: identity };
//const identityNever: GenericFnType<string> = identity;
identityNever.fn("ss");

const identityString: GenericIdentityFn<string> = identity;

let myIdentity: GenericIdentityFn<number> = identity;

type User = {
  name: string;
  pass: string;
  age: number;
  admin: boolean;
};

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const getDB: () => DB = () => {
  return {} as DB;
};

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;

//type Num = number

type Str = GetReturnType<(x: string) => string>;

//type Str = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

//type Bools = boolean[]

/**
 * GetNames тип для извлечения набора ключей
 * @template FromType тип - источник ключей
 * @template KeepType критерий фильтрации
 * @template Include  признак для указания как интерпретировать критерий фильтрации. В случае false - инвертировать результат для KeepType
 */
type GetNames<FromType, KeepType = any, Include = true> = {
  [K in keyof FromType]: FromType[K] extends KeepType
    ? Include extends true
      ? K
      : never
    : Include extends true
    ? never
    : K;
}[keyof FromType];

// Пример использования
class SomeClass {
  firstName?: string;
  lastName?: string;
  age?: number;
  count?: number;

  getData(): string {
    return "dummy";
  }
}

// be: "firstName" | "lastName"
type StringKeys = GetNames<SomeClass, string>;

// be: "age" | "count"
type NumberKeys = GetNames<SomeClass, number>;

// be: "getData"
type FunctionKeys = GetNames<SomeClass, Function>;

// be: "firstName" | "lastName" | "age" | "count"
type NonFunctionKeys = GetNames<SomeClass, Function, false>;
