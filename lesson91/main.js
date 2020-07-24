// setInterval(関数, ミリ秒) ミリ秒後に関数を実行

// 10秒
const totalTime = 10000;
const oldTime = Date.now();

const timerId = setInterval(() => {
    const currentTime = Date.now();

    const diff = currentTime - oldTime;

    const remainMilliSec = totalTime - diff;

    const remainSec = Math.ceil(remainMilliSec / 1000);

    let label = `残り${remainSec}秒`;

    // 0秒以下になったとき
    if (remainMilliSec <= 0) {
        clearInterval(timerId);

        label = '終了';
    }

    document.querySelector('#log').innerHTML = label;
}, 1000);