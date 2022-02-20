// 配列

let aa = [1, 2, 3]; // number[]
let ad = [1, "2"]; // (number | string)[]
// console.log(typeof aa);

// タプル tuple
// 固定長の配列で明示的に型付けする必要がある。
let ba: [number] = [1];
let bb: [number, string, boolean, unknown, any] = [
  1,
  "1",
  true,
  undefined,
  null,
];

// 可変長のサポートもされている
let bc: [string, ...string[]] = ["hoge", "fuga", "piyo"];
let bd: [string, ...string[]] = ["hoge"];
let bda: [string, ...string[]] = [];

let be: [...number[]] = [1, 2, 3, 4];
let bf: [...number[]] = [];

// 読み取り専用の配列とtaple
let ca: readonly number[] = [1, 2, 3];
let index0 = ca[0];

let cb: readonly number[] = ca.concat(4);

// Index signature in type 'readonly number[]' only permits reading.
// cb[4] = 1;
// let h =
