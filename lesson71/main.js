// Object.keys(オブジェクト) オブジェクトの各キーの配列
// Object.values(オブジェクト) オブジェクトの各値の配列
// Object.entries(オブジェクト) オブジェクトの各プロパティの配列

const country = {
    id: 1,
    name: '日本',
    language: 'Japanese'
};

console.log(Object.keys(country)); //結果: ["id", "name", "language"]
console.log(Object.values(country)); //結果: [1, "日本", "Japanese"]
console.log(Object.entries(country));
//結果
// 0: (2) ["id", 1]
// 1: (2) ["name", "日本"]
// 2: (2) ["language", "Japanese"]