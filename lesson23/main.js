// テキストエリア
let textarea = document.querySelector('.textarea');

// 入力中の文字数
let string_num = document.querySelector('.string_num');

// テキストを入力するたびにonKeyUp()を実行
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
    // 入力されたテキスト
    const inputText = textarea.value;
    // 文字数を反映 (lengthで文字数の取得)
    string_num.innerText = inputText.length;
}