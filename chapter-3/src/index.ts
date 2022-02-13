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
let aa: CatAndDog = {
  // Type '{ name: string; purrs: false; wags: false; }' is not assignable to type 'CatAndDog'.
  name: "Domino",
  purrs: false,
  wags: false,
};

// ok
let ac: CatAndDog = {
  name: "Domino",
  purrs: false,
  barks: true,
  wags: false,
};
