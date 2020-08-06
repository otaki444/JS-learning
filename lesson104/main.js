// removeEventListener イベントリスナーの削除

const btn = document.querySelector('button');
btn.addEventListener('click', onClickButton);

// 5秒後に上記のイベントリスナーを削除
setTimeout(() => {
    btn.removeEventListener('click', onClickButton);
}, 5000);

function onClickButton() {
    alert('最初の5秒間のみ表示されます');
}