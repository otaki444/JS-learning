// window.innerWidth ブラウザーの横幅
// window.innerHeight ブラウザーの高さ

// 画面の横幅
const width = window.innerWidth;
document.querySelector('#width').innerHTML = `横幅 ${width}px`;

// 画面の高さ
const height = window.innerHeight;
document.querySelector('#height').innerHTML = `高さ ${height}px`;


window.addEventListener('resize', resizeScreen);

function resizeScreen(event) {
    // 新しい画面幅
    const newWidth = innerWidth;
    // 新しい画面高さ
    const newHeight = innerHeight;

    document.querySelector('#width').innerHTML = `横幅 ${newWidth}px`;
    document.querySelector('#height').innerHTML = `高さ ${newHeight}px`;
}