// mouseover マウスが要素上に乗った時(バブリングあり)
// mouseout マウスが要素上から離れた時(バブリングあり)
/**
 * バブリングとは親要素、子要素のどちらもイベントを設定した際に、
 * 子要素のイベントが発生した場合、親要素のイベントも発生させること
 *  */

document.querySelector('.box').addEventListener('mouseover', () => {
    document.getElementById('log').innerHTML = 'boxに乗っています';
    console.log('box')
});

document.querySelector('.inner').addEventListener('mouseover', () => {
    document.getElementById('log2').innerHTML = 'innerに乗っています';
    console.log('inner') //子要素のinnerがイベント発生しているとboxのイベントも発生する
});

document.querySelector('.box').addEventListener('mouseout', () => {
    document.getElementById('log').innerHTML = 'boxから離れました';
});

document.querySelector('.inner').addEventListener('mouseout', () => {
    document.getElementById('log2').innerHTML = 'innerから離れました';
});