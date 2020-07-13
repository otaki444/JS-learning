// typeof 値 データ型を確認する

/** データ型
 * Undefined   undefined
 * Null        null
 * Boolean     true, false
 * String      'Hello World'
 * Number      1, 2, 3
 * Symbol      symbol() (唯一のもの) 「===」や「==」でtrueになるものを作らない
 * Object      [1, 2, 3], {id: 1, name: 'john doe'}
 * 関数         function() {}
 */

console.log(typeof undefined);// 結果: undefined

const n = null;
console.log(typeof n);// 結果: object(nullの結果はobjectになる)

console.log(typeof true);// 結果: boolean

console.log(typeof 'Hello World');// 結果: string

console.log(typeof 1);// 結果: number

console.log(typeof Symbol());// 結果: symbol

console.log(typeof [1, 2, 3, 4, 5]);// 結果: object

console.log(typeof function() {});// 結果: function