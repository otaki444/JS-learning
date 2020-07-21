// setFullYear(西暦) 西暦を設定
// setMonth(月) 月を設定
// setDate(日) 日を設定
// setHours(時) 時を設定
// setMinutes(分) 分を設定
// setSeconds(秒) 秒を設定
// setMilliseconds(ミリ秒) ミリ秒を設定

const date = new Date();
date.setFullYear(2000);
date.setMonth(6);
date.setDate(7);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

document.querySelector('#date').innerHTML = `セットした日時を表示 <br>${date.toLocaleString()}`;