import { type } from "os";

const a: unknown = 30;
let b = a === 123;

// unkonwn型は特定の型であることを想定した事柄は行えない
// let c = a + 10; // object is type 'unknown';

if (typeof a == "number") {
  let d = a + 10;
}

type Age = number;
type Person = {
  name: string;
  age: Age;
};

//型エイリアス
let he: Person = {
  name: "he",
  age: 10,
};

// let she: Person = {
//   name: "he",
//   age: "10", // 型エイリアスがnumberにstringのためエラー
// };

// unionとintersection
type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };

// union
type CatOrDogOrBoth = Cat | Dog;

// intersection
type CatAndDog = Cat & Dog;

// unionはCat型になれる
let a: CatOrDogOrBoth = { name: "Domino", purrs: false };

// unionはDog型にもなれる
let b: CatOrDogOrBoth = { name: "Domino", barks: true, wags: false };

// unionはCatAndDog型のメンバーになれる
let c: CatOrDogOrBoth = {
  name: "Domino",
  purrs: false,
  barks: true,
  wags: false,
};

// 中途半端な型もOK
let d: CatOrDogOrBoth = { name: "Domino", purrs: false, wags: false };

// intersection

// 中途半端な型はだめ
// ok
let both: CatAndDog = {
  name: "Domino",
  purrs: false,
  barks: true,
  wags: false,
};

let notBoth: CatAndDog = {
  // Type '{ name: string; purrs: false; wags: false; }' is not assignable to type 'CatAndDog'.
  name: "Domino",
  purrs: false,
  wags: false,
};

function func(a: string, b: number) {
  return a || b;
}

let f = func("string", 1);

// Chapter4
// 名前付き関数
function greet(name: string): boolean {
  console.log("hello");
  return true;
}
// 関数式
let greet2 = function (name: string): number {
  return 1;
};
// アロー関数式
let greet3 = (name: string): string => {
  return "hello";
};
// アロー関数式省略記法
let greet4 = (name: string): string => "hello";

// rest parameter：可変長変数を型アノテーションできる
function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// thisはクラスメソッド以外で使用は避ける

// ジェネレーター
function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let fibonacciGenerator = createFibonacciGenerator();
fibonacciGenerator.next();
fibonacciGenerator.next();

let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  },
};

// call signature
type Log = (message: string, userId?: string) => void;
let log: Log = (message, userId = "Not signed in") => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};
// 省略なし
type Log2 = { (message: string, userId?: string): void };

// オーバーロード
type Reserve = {
  (from: Date, to: Date, destination: string): boolean;
  (from: Date, destination: string): boolean;
};
let reserve: Reserve = (
  from: Date,
  toOrDestinnation: Date | string,
  destination?: string
) => {
  if (toOrDestinnation instanceof Date && destination !== undefined)
    // 宿泊旅行
    return true;
  else if (typeof toOrDestinnation === "string") {
    // 日帰り
    return false;
  }
  return true;
};
const tokyo = reserve(new Date(), "Tokyo");

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};
// let filter: Filter = (array, f) => //
// filter([1, 2, 3], (_) => _ > 2);

// map function
// function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
//     let result[]
//     for (let i = 0; i < array.length; i++) {
//         result[i] = f(array[i]);
//     }
//     return result;
// }

// function map<T,U>(array: T[], f:(item: T) => U): U[]{
//     let result[]
//     for (let i = 0; i < array.length; i++) {
//         result[i] = f(array[i]);
//     }
//     return result;
// }

class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

// 例外を返す
function parse(
  birthday: string
): Date | InvalidDateFormatError | DateIsInTheFutureError {
  let date = new Date(birthday);
  if (!date) {
    return new InvalidDateFormatError("error");
  }
  if (date.getTime() > Date.now()) {
    return new DateIsInTheFutureError();
  }
}

let res = parse("2022/01/01");
