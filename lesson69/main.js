// {...オブジェクト} 各要素を分割代入する
// Object.assign({}, オブジェクト) オブジェクトをコピー

const object = {
    animals: [
        {id: 1, name: 'dog'},
        {id: 2, name: 'cat'},
        {id: 3, name: 'bird'},
        {id: 4, name: 'lion'},
        {id: 5, name: 'bear'}
    ]
};

// オブジェクトをコピーする
const copy = Object.assign({}, object);

console.log(copy);

// {animals: Array(5)}
// animals: Array(5)
// 0: {id: 1, name: "dog"}
// 1: {id: 2, name: "cat"}
// 2: {id: 3, name: "bird"}
// 3: {id: 4, name: "lion"}
// 4: {id: 5, name: "bear"}