const date = new Date();
date.setMonth(date.getMonth() - 6);
document.querySelector('#month').innerHTML = `半年前の日付 ${date.toLocaleDateString()}`;

const date2 = new Date();
date2.setDate(date2.getDate() + 10);
document.querySelector('#day').innerHTML = `10日後の日付 ${date2.toLocaleDateString()}`;