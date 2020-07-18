// toLocalDateString() 日付の文字列を取得する
// toLocalTimeString() 時刻の文字列を取得する

const date = new Date();

const local = date.toLocaleString();
console.log(local); // 結果: 2020/7/19 0:00:00(例)

const localDate = date.toLocaleDateString();
console.log(localDate); // 結果: 2020/7/19(例)

const localTime = date.toLocaleTimeString();
console.log(localTime); // 結果: 1:11:11(例)

document.querySelector('#date').innerHTML = `toLocalString => ${local}<br>
toLocaleDateString => ${localDate}<br>
toLocaleTimeString => ${localTime}`;
