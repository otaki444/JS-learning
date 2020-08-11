// event.clientX ブラウザー左上を基準としたX座標
// event.clientY ブラウザー左上を基準としたY座標
// event.offsetX 要素左上を基準としたX座標
// event.offsetY 要素左上を基準としたY座標
// event.pageX ページ左上を基準としたX座標
// event.pageY ページ左上を基準としたY座標
// event.screenX デバイス左上を基準としたX座標
// event.screenY デバイス左上を基準としたY座標

// 座標を表示
document.querySelector('#move').addEventListener('mousemove', (event) => {
    console.log(event.clientX, event.clientY);
});


const moveCircle = document.querySelector('#move');

//マウスを押したら移動開始
document.addEventListener('mousedown', () => {
    // マウスの動きに合わせて設定したものを動かす
    document.addEventListener('mousemove', onMouseMove);

    // ページ上でマウスを離したら移動終了
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    });
});

/**
 * マウスが動いた時の処理
 */
function onMouseMove(event) {
    moveCircle.style.left = `${event.clientX - 50}px`;
    moveCircle.style.top = `${event.clientY - 50}px`;
}