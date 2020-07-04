// 配列filter(コールバック関数) コールバック関数に合格した配列を生成

// 1~5の数値から3以上の数値の配列を生成
const array = [1, 2, 3, 4, 5].filter((value) => value >= 3);
console.log(array); // 結果: [3, 4, 5]

// データ
const userData = [
    {age: 12, name: '佐藤'},
    {age: 25, name: '鈴木'},
    {age: 46, name: '斎藤'},
    {age: 58, name: '神田'},
    {age: 35, name: '片山'}
];

// button要素についてイベント
document.querySelectorAll('.button').forEach((element) => {
    element.addEventListener('click', (event) => {
        onclickButton(event);
    });
});

/**
 * ボタンがクリックされた時の処理
 */
function onclickButton(event) {
    // クリックされたボタン要素
    const button = event.target;
    // ボタン要素からdataーageを取得
    const targetAge = button.dataset.age;
    // targetAge以上のユーザー配列を生成
    const filterdList = userData.filter((data) => data.age >= targetAge);
    // 配列を出力
    updateList(filterdList);
}

/**
 * ユーザー配列を出力
 */
function updateList(filterdList) {
    let listHtml = '';

    for (const data of filterdList) {
        listHtml += `<li>${data.name} : ${data.age}歳</li>`;
    }

    document.querySelector('.list').innerHTML = listHtml;
}