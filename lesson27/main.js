// includes 文字列が含まれているかどうか
// startsWith 文字列で始まるか
// endsWith 文字列で終わるか

const myString = 'JavaScriptを覚えよう';

// myStringに「JavaScript」の文字列が入っているか
const a1 = myString.includes('JavaScript');
console.log(a1); // 結果 true

// myStringが「覚えよう」の文字列で始まるか
const a2 = myString.startsWith('覚えよう');
console.log(a2); // 結果 false

// myStringが「覚えよう」の文字列で終わるか
const a3 = myString.endsWith('覚えよう');
console.log(a3); // 結果 true