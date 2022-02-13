const a: unknown = 30;
let b = a === 123;

// unkonwn型は特定の型であることを想定した事柄は行えない
let c = a + 10; // object is type 'unknown';

if (typeof a == "number") {
  let d = a + 10;
}
