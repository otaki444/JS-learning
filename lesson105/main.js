// mousedown マウスボタンを押したとき
// mouseup マウスボタンを離したとき
// mousemove マウスボタンを動かしたとき

const log = document.querySelector('#log');

log.addEventListener('click', () => {
    log.innerHTML = 'クリックしました';
});

log.addEventListener('mouseup', () => {
    log.innerHTML = 'マウスボタンを離しました';
});

log.addEventListener('mousemove', () => {
    log.innerHTML = 'マウスを移動しました';
});

