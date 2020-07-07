// {} オブジェクトを初期化
// {キー: 値, キー: 値,} オブジェクトを初期化
// オブジェクト[キー名] 値を取得
// オブジェクト.キー名 値を取得
// オブジェクト[キー名] = 値 値を更新
// オブジェクト.キー名 = 値 値を更新

const object = {}; // 空のオブジェクト
console.log(object.foo); // undefined(存在しないため)

// 人物データを想定したオブジェクト
const person = {
    id: 1,
    name: '鈴木',
    age: 25
};

// 値を取得
console.log(person.id); //結果: １
console.log(person['name']); // 結果: 鈴木

// 値の更新
person.id = 10;
person['name'] = '佐藤';

console.log(person.id); // 結果: 10
console.log(person['name']); // 結果: 佐藤
