// 配列.indexOf(検索したい要素, 検索開始位置) 要素のインデックスを調べる
// 配列.lastIndexOf(検索したい要素, 検索開始位置) 要素の末尾からのインデックス
// 配列.includes(検索したい要素, 検索開始位置) 要素が含まれているか

['りんご', 'バナナ', 'イチゴ'].indexOf('バナナ'); // インデックス1
[0, 2, 4, 6 ,8, 4, 5].indexOf(4); // インデックス2(最初の4)

[0, 2, 4, 6 ,8, 4, 5].lastIndexOf(4); // インデックス5(最後の4)

['りんご', 'バナナ', 'イチゴ'].includes('バナナ'); // true
['りんご', 'バナナ', 'イチゴ'].includes('ブドウ'); // false