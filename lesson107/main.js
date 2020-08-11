// mouseenter マウスが要素の上に乗った時
// mouseleave マウスが要素の上から離れた時

document.querySelector('.box').addEventListener('mouseenter', () => {
    document.getElementById('log').innerHTML = 'boxの上にマウスが乗っています';
});

document.querySelector('.box').addEventListener('mouseleave', () => {
    document.getElementById('log').innerHTML = 'boxから離れました';
});
