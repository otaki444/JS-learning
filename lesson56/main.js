// データ
const userData = [
    {id: 30, name: '鈴木'},
    {id: 13, name: '斎藤'},
    {id: 2, name: '藤田'},
    {id: 200, name: '江口'},
    {id: 48, name: '神田'},
    {id: 7, name: '佐藤'}
];

// 表示を更新する
function updateList() {
    let listHtml = '';

    for (const data of userData) {
        listHtml += `<li>${data.id} ${data.name}</li>`;
    }

    document.querySelector('.user-list').innerHTML = listHtml;
}

// 昇順にソート
function sortByAscending() {
    userData.sort((a, b) => {
        return a.id - b.id;
    });

    updateList();
}

// 降順にソート
function sortByDescending() {
    userData.sort((a, b) => {
        return b.id - a.id;
    });

    updateList();
}

// 昇順にクリックした時の処理
document.querySelector('.ascending').addEventListener('click', () => {
    sortByAscending();
});

// 降順にクリックした時の処理
document.querySelector('.descending').addEventListener('click', () => {
    sortByDescending();
});

// 初期は昇順に並べる
sortByAscending();