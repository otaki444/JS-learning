// padStart(繰り返しの長さ, 追加する文字列) 文字列の冒頭に指定の数だけ文字列を追加する
// padEnd(繰り返しの長さ, 追加する文字列) 文字列の末尾に指定の数だけ文字列を追加する

console.log(
    '5'.padStart(2, '0') //結果: 05
);

console.log(
    '123'.padStart(3, '0') //結果: 123
);

console.log(
    'ff'.padStart(4) //結果: 「  ff」 (空文字が2つ追加される)
);

console.log(
    'ff'.padEnd(4, '0') //結果: ff00
);


/** 時間 */
const hourElement = document.querySelector('.hour');

/** 分 */
const minuteElement = document.querySelector('.minute');

/** 秒 */
const secondElement = document.querySelector('.second');

update();

/**
 * 現在時間を表示する処理
 */
function update() {
    const currentTime = new Date();

    // 時間の表示
    const hour = currentTime.getHours();
    hourElement.innerText = addZeroPadding(hour);

    // 分の表示
    const minute = currentTime.getMinutes();
    minuteElement.innerText = addZeroPadding(minute);

    // 秒の表示
    const second = currentTime.getSeconds();
    secondElement.innerText = addZeroPadding(second);

    // 次のフレームで再度update()を実行する
    requestAnimationFrame(update);
}

/**
 * 2桁の表記になるよう、文字列冒頭に0をつける関数
 * @param num
 * @returns {string}
 */
function addZeroPadding(num) {
    return String(num).padStart(2, '0');
}



