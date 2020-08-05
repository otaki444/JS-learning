// once 一度だけ呼び出す

const option = {
    once: true
};

//最初の１度のみクリックしたときにclickButtonを呼び出す
document.querySelector('button').addEventListener('click', clickButton, option);

function clickButton() {
    alert('1度だけ表示されます');
}