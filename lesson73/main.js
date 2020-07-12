// Object.freeze(オブジェクト) オブジェクトを変更不能にする
// Object.isFrozen(オブジェクト) オブジェクトが変更不能かどうか

const animal = {
    id: 1,
    name: 'dog',
    age: 10
};

animal.id = 2; //変更可能
animal.birth = 'July' //追加可能

console.log(animal.id); //結果: 2
console.log(animal.birth); //結果: July

Object.freeze(animal);
animal.id = 3; //結果: 変更不能なためエラー
console.log(animal.id); //結果: 2

// animalオブジェクトが変更不能状態か確認
console.log(Object.isFrozen(animal)); //結果: true(変更不能)