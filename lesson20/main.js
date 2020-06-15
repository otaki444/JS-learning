// Math.random() 0以上１未満のランダムな数値を返す

// 長方形
const rectangle = document.querySelector('.rectangle');

// ボタンをクリックしたらonClickButton()を実行
document.querySelector('.button').addEventListener('click', onClickButton);

// ボタンをクリックするたびに、長方形のグラデーション色を変える
function onClickButton() {
    // 0〜359のランダムな数値を取得(truncで整数化)
    const randomHue = Math.trunc(Math.random() * 360);
    // グラデーションの開始色と終了色を決定   ${}を使う際の''ではなく``に注意
    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

    // グラデーションのための変数(--start, --end)を変更
    rectangle.style.setProperty('--start', randomColorStart);
    rectangle.style.setProperty('--end', randomColorEnd);
}