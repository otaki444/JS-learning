// getMonth() 月を取得
// getDate() 日を取得

const date = new Date();
const month = date.getMonth() + 1; // 0から始まるため＋１にする
const day = date.getDate();

document.querySelector('#date').innerHTML = `${month} / ${day}`;