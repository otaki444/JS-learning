// [...変換対象] 配列に変換する

/** div要素を全取得
 * これにより戻り値がNodeListOf==ArrayLikeというオブジェクトになる(NodeListは配列に似たオブジェクトであり、配列そのものではない)
 * そのため、filter()等の配列用のメソッドが使えない
 */
const allDiv = document.querySelectorAll('div');

// div要素の数を出力
console.log(allDiv.length);

// ３番目のdiv要素を出力する(インデックス付けされた要素)
console.log(allDiv[2]);

// divタグのnumberクラスという要素を探すため、以下のようなfilter()メソッドを使用すると配列ではないためエラーになる
// allDiv.filter((element) => element.classList.contains('number'));

const allDivArray = [...allDiv];

// 配列用のメソッドが使用可能になる
allDivArray.filter((element) => element.classList.contains('number'));

// 文字列もArrayLikeなオブジェクト
const greeting = 'Hello';
console.log(greeting.length); // 結果: 5
// そのため[...文字列]で変換可能
console.log([...greeting]); // 結果: ["H", "e", "l", "l", "o"]