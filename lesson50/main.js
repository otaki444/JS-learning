// 配列1.concat(配列2, 配列3...) 配列1に配列2、配列3を結合する
// [...配列1, ...配列2, ...配列3] 配列1に配列2、配列3を結合する

const array1 = ['鈴木', '佐藤'];
const array2 = ['田中'];
const array3 = array1.concat(array2); //array1にarray2を結合
console.log(array3); //結果: ["鈴木", "佐藤", "田中"]

const array4 = ['高橋', '青木'];
const array5 = [...array3, ...array4]; //array3にarray4を結合
console.log(array5); //結果: ["鈴木", "佐藤", "田中", "高橋", "青木"]