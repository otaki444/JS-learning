// toLowerCase() 文字列を小文字に変換する
// toUpperCase() 文字列を大文字に変換する

'TEST'.toLowerCase(); //結果'test'
'john smith'.toUpperCase();//結果'JOHN SMITH'

const nameInput = document.querySelector('.name-input');
const warningMessage = document.querySelector('.warning-message');

// .name-inputに文字を入力するたびに処理を実行する
nameInput.addEventListener('input', () => {
    // 入力された文字を取得する
    const inputStr = nameInput.value;
    // 入力された文字を小文字に変換する
    const normalStr = inputStr.toLowerCase();
    // 文字にtestが入っていれば警告する
    // 「test」,「TEST」のどちらでも警告が表示される
    if (normalStr.includes('test') === true) {
        warningMessage.textContent = '「test」が含まれています';
    } else {
        warningMessage.textContent = '';
    }
});