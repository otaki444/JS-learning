// 配列.unshift(要素1, 要素2, ...) 先頭に要素を追加する
// 配列.push(要素1, 要素2, ...) 末尾に要素を追加する

const array1 = ['りんご', 'みかん'];
array1.unshift('バナナ'); //先頭に追加
console.log(array1); //結果: バナナ, りんご, みかん

const array2 = ['りんご', 'みかん'];
array2.push('バナナ', 'いちご'); //末尾に追加
console.log(array2); //結果: りんご, みかん, バナナ, いちご