const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

// アロー関数 ver
btn1.addEventListener('click', () => {
    document.querySelector('#log1').innerHTML = 'ボタン１をクリックしました(アロー関数)';
});

// function宣言 ver
btn2.addEventListener('click', function() {
    document.querySelector('#log2').innerHTML = 'ボタン２をクリックしました(function)';
});

// 関数名を指定 ver
btn3.addEventListener('click', onClickButton);

function onClickButton() {
    document.querySelector('#log3').innerHTML = 'ボタン３をクリックしました(関数名)';
}