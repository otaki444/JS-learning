console.log('鈴木' == '鈴木'); // true
console.log(10 > 30); //false
console.log(20 <= 30); //true

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 == array2); //false 参照先が異なる

const array3 = [1, 2, 3];
const array4 = array3;
console.log(array3 == array4); //true 参照先が同じ

console.log(10 == '10'); //true ==の場合同じ型とみなされる
console.log(10 === '10'); //false