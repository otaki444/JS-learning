// addEventListener() ユーザー操作のイベントを制御(クリックやスクロールなど)

const button = document.querySelector('#btn');
button.addEventListener('click', onClickButton);

function onClickButton() {
    document.querySelector('#log').innerHTML = 'ボタンがクリックされました！';
}