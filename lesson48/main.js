// 配列.shift() 先頭の要素を取り除く
// 配列.pop() 末尾の要素を取り除く

const array1 = ['りんご', 'みかん', 'バナナ'];
const shiftedValue = array1.shift(); //先頭を取り除く
console.log(shiftedValue); //取り除かれた要素
console.log(array1); // 結果: ["みかん", "バナナ"]

const array2 = ['りんご', 'みかん', 'バナナ'];
const poppedValue = array2.pop(); //末尾を取り除く
console.log(poppedValue); // 取り除かれた要素
console.log(array2); // 結果: ["りんご", "みかん"]