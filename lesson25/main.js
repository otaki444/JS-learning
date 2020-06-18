// indexOf 最初に現れるインデックス
// lastIndexOf 最後に現れるインデックス
// search 正規表現にマッチするインデックス
const myString = 'JavaScriptを覚えよう';

// 含まれる場合
// indexOf 文字列が現れるまでの数値を処理
const a1 = myString.indexOf('JavaScript');
console.log(a1); //結果 0

const a2 = myString.indexOf('を覚えよう');
console.log(a2); //結果 10

// lastIndexOf 文字列が最後に現れるまでの数値を処理
const a3 = myString.lastIndexOf('a');
console.log(a3); //結果 3

// 含まれない場合 (含まれていない場合は-1を出力)
const b1 = myString.indexOf('HTML');
console.log(b1); //結果 -1

const b2 = myString.indexOf('j');
console.log(b2); //結果 -1 (大文字小文字の区別のため)

// 開始インデックスを与えるとそのインデックスから検索
const c1 = myString.indexOf('Java', 5);
console.log(c1); //結果 -1 (大文字小文字の区別のため)
