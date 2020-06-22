const userName = '鈴木';

const tag = `<div class="container">こんにちは${userName}さん</div>`;
console.log(tag);

const str2 = `10 × 10は${10 * 10}です。`;
console.log(str2);

// 今日の日付を取得
const today = new Date();
// #main内にHTMLコードを動的に書き出す
document.querySelector('#main').innerHTML = `
    <h1>今日${today.getMonth() + 1}/${today.getDate()}の天気</h1>
    <p>東京は晴れでしょう</p>`;