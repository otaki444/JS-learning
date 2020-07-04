// 文字列1.localConpare(文字列2) 文字列1と文字列２を比較する。(アルファベットの大文字、小文字を無視してソート)

// 比較関数無し
const array = ['grape', 'Banana', 'apple'];
array.sort();
console.log(array); //結果: ["Banana", "apple", "grape"]

// localCompare使用
const array2 = ['grape', 'Banana', 'apple'];
array2.sort((a, b) => a.localeCompare(b));
console.log(array2); // 結果: ["apple", "Banana", "grape"]