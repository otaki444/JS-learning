// scroll 対象の要素がスクロールしたとき(主にwindowに設定する)

window.addEventListener('scroll', () => {
    console.log(window.scrollX, window.scrollY);
});
