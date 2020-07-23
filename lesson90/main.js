// Date.now() 現在の時間を基準時からのミリ秒数で取得する

// 開始時間を記録
const oldTime = Date.now();

setInterval(() => {
    const currentTime = Date.now();

    // 経過したミリ秒を取得
    const diff = currentTime - oldTime;

    // 秒数を取得
    const sec = Math.floor(diff / 1000);

    document.querySelector('#log').innerHTML = `${sec} 秒経過！`;
}, 1000);