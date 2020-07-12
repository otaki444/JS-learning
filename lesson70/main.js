// オブジェクト.hasOwnProperty(キー名) 値があるかどうか
// キー名 in オブジェクト名 値があるかどうか

// ユーザーデータを想定したオブジェクト
const data = {
    id: 1,
    name: 'dog',
    age: 10
};
// dataオブジェクトにidがあるか
console.log(data.hasOwnProperty('id')); // 結果: true
// dataオブジェクトにcolorがあるか
console.log(data.hasOwnProperty('color')); // 結果: false
// dataオブジェクトにidがあるか
console.log('id' in data); // 結果: true

// dataオブジェクトのidはnullではないか
console.log(data.name != null); // 結果: true
console.log(data['name'] != null); // 結果: true
