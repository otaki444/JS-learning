// confirm(内容) 確認ダイアログを表示

const button = document.querySelector('#btn');

button.addEventListener('click', (event) => {
    // コンファームを表示
    const ok = confirm('確認しましたか？');

    // okした場合
    if (ok == true) {
        document.querySelector('#log').innerHTML = '完了しました';
    } else {
        document.querySelector('#log').innerHTML = 'キャンセルしました';
    }
});