// {変数１, 変数２, ...} = オブジェクト オブジェクトの値を変数に展開する

const animal = {
    id: 1,
    name: 'dog',
    age: 10
};

// オブジェクトの値を変数にする
const { id, name, age, birthPlace} = animal;

console.log(id); //animalのidを出力 結果: 1
console.log(name); //animalのnameを出力 結果: dog
console.log(age); //animalのageを出力 結果: 10
console.log(birthPlace) //animalのbirthPlaceを出力 結果: undefined(存在しないため)

// nameの値をanimalNameに保持
const {name: animalName} = animal;

console.log(animalName);