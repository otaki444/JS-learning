// getHours() 時を取得
// getMinutes() 分を取得
// getSeconds() 秒を取得
// getMilliseconds() ミリ秒を取得

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const millisecond = date.getMilliseconds();

const union = `${hour}時 ${minute}分 ${second}秒 ${millisecond}`;

document.querySelector('#date').innerHTML = `今の時間 ${union} です`;