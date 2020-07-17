// getFullYear() 西暦を取得する

const date = new Date();
const year = date.getFullYear(); //西暦を取得
console.log(year); //結果: 2020(例)

document.querySelector('#year').innerHTML = `西暦${year}年`;