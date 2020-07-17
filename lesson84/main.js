// getDay() 曜日を取得(数値で出力)

const date = new Date();
const day = date.getDay();
const list = ['日', '月', '火', '水', '木', '金', '土'];
const days = list[day]; // dayの数値からlistの曜日を取得

document.querySelector('#date').innerHTML = `今日は${days}曜日です`;