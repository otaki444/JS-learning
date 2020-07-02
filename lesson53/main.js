// 配列.find(コールバック関数) コールバック関数に合格する最初の要素
// 配列.findIndex(テスト関数) コールバック関数に合格する最初の要素のインデックス
// (要素, インデックス, 元配列) => 真偽値 要素を受け取り、真偽値を返す

const myArray = ['鈴木', '田中', '高橋', '後藤'];
// 配列から「田中」を取得
const targetUser = myArray.find((element) => element === '田中');
console.log(targetUser); //結果: 田中


// idとnameキーを持つ配列
const userData = [
    {id: 1, name: '鈴木'},
    {id: 2, name: '田中'},
    {id: 3, name: '後藤'},
    {id: 4, name: '高橋'},
    {id: 5, name: '前田'}
];

/** 検索IDを入力する */
const searchIdInput = document.querySelector('#search-id');

/** 検索結果を表示する */
const searchResult = document.querySelector('#search-result');

// 文字が入力されるたびに内容をチェック
searchIdInput.addEventListener('keyup', () => {
    // 検索IDを取得
    const searchId = Number(event.target.value);
    findUser(searchId);
});

// ユーザーを検索する
function findUser(searchId) {
    // 該当データを取得
    const targetData = userData.find((data) => data.id === searchId);

    // 該当データが存在していなかったら「該当者なし」と表示する
    if (targetData == null) {
        searchResult.textContent = '該当者なし';
        return;
    }

    // 該当データの名前を表示する
    searchResult.textContent = targetData.name;
}