// 文字列1 + 文字列2 + 文字列3 + ...  文字列1に対して、文字列2、文字列3を結合する
// `${文字列1}${文字列2}${文字列3}`  文字列1、2、3を結合する

const country = 'アメリカ';
const states = '合衆国';
console.log(country + states); //結果'アメリカ合衆国'
// 以下も結果同様
console.log(`${country}${states}`);

// 姓の入力欄
const familyNameText = document.querySelector('#familyNameText');

// 名の入力欄
const firstNameText = document.querySelector('#firstNameText');

// 姓名
const fullName = document.querySelector('#fullName');

// 文字を入力するたびにonKeyUp()を実行
firstNameText.addEventListener('keyup', onKeyUp);
familyNameText.addEventListener('keyup', onKeyUp);

// 文字が入力されるたびに実行される関数
function onKeyUp() {
    // 姓
    const familyName = familyNameText.value;
    // 名
    const firstName = firstNameText.value;

    // フルネームを出力
    fullName.innerHTML = familyName + ' ' + firstName;
    // fullName.innerHTML = `${familyName}${firstName}`; でも同じ
}