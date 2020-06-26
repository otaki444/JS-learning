// [] 配列を定義する
// 配列[インデックス] 配列内の値を取得する

// 空の配列
const array1 = [];
console.log(array1);

// 「0」「2」「8」をまとめたデータ型
const array2 = [0, 2, 8];
console.log(array2);
console.log(array2[1]); //配列内の値を取得

// 「鈴木」「高橋」をまとめたデータ型
const array3 = ['鈴木', '高橋'];
console.log(array3);
console.log(array3[0]); //配列内の値を取得

// 「1」「鈴木」「false」をまとめたデータ型
const array4 = [1, '鈴木', false];
console.log(array4);

// [1, 1, 1], [2, 2, 2]をまとめたデータ型
const array5 = [[1, 1, 1], [2, 2, 2]];
console.log(array5);

// 2つのオブジェクトをまとめたデータ型
const array6 = [{ id: 1, name: '鈴木' }, { id: 2, name: '高橋'}];
console.log(array6);