// 配列.reduce(コールバック関数, 初期値) 各要素を左から右に処理して単一の値を生成
// 配列.reduceRight(コールバック関数, 初期値) 各要素を右から左に処理して単一の値を生成

const price = [150, 200, 250];

// 合計値を計算
const sum = price.reduce((previous, current) => {
    return previous + current;
});
// 省略可能
// price.reduce((previous, current) => previous + current);

console.log(sum); //結果: 600

const array = ['イチゴ', 'バナナ', 'パイナップル', 'リンゴ'];

// reduce()メソッドの場合
const fruits1 = array.reduce((previous, current) => {
    return `${previous}&${current}`;
});
console.log(fruits1); //結果: イチゴ&バナナ&パイナップル&リンゴ

// reduceRight()メソッドの場合
const fruits2 = array.reduceRight((previous, current) => {
    return `${previous}&${current}`;
});
console.log(fruits2); //結果: リンゴ&パイナップル&バナナ&イチゴ