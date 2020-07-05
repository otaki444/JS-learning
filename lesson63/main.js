// [変数１, 変数2, 変数3] = [値１, 値２, 値３] 各変数に値を代入する

let a;
let b;
let c;
[a, b, c] = [1, 2, 3];
console.log(a, b, c); // 結果: 1 2 3

const array = ['おはよう', 'こんにちは'];
// 順番を入れ替える
[array[0], array[1]] = [array[1], array[0]];
console.log(array); // 結果: ["こんにちは", "おはよう"]