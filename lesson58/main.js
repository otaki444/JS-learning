// 配列.map(コールバック関数) コールバック関数によって新しい配列を生成する

/** コールバック関数
 * （要素) => 変更後の要素 要素を受け取って変更後の要素を渡す
 */

const id = [4, 7, 10, 36];

const userId = id.map((value) => `userid_${value}`);
console.log(userId); //結果: ["userid_4", "userid_7", "userid_10", "userid_36"]


/** idとnameを持つオブジェクトからidだけの配列を作る  **/
const data = [
    {id: 3, name: '佐藤'},
    {id: 20, name: '青木'},
    {id: 22, name: '渡邉'},
    {id: 12, name: '鈴木'},
    {id: 40, name: '神田'}
];

const idList = data.map((value) => value.id);
console.log(idList); //結果: [3, 20, 22, 12, 40]
