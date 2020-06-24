// toFixed(桁数) 小数点以下を指定の桁数にする
// toPrecision(桁数) 指定桁数の制度にする

(0.333333).toFixed(2); //結果: 0.33(文字列)

(123.4567).toFixed(1); //結果: 123.5(近似値で処理される)

(2.4).toFixed(4); //結果: 2.4000(0で埋められる)

(0.33333).toPrecision(2); //結果: 0.33

(1234.567).toPrecision(4); //結果: 1235

(10).toPrecision(4); //結果: 10.00


// 秒用エレメント
const secondElement = document.querySelector('.second');

// 15秒後をゴールにする
const goalTime = new Date().getTime() + 15 * 1000;

update();

// 毎フレーム実行される関数
function update() {
    // 現在時刻
    const currentTime = new Date().getTime();

    // 目標時刻までの残り時間
    const leftTime = goalTime - currentTime;

    // 残り時間が0秒未満だったら、タイマーを停止する
    if (leftTime <= 0) {
    secondElement.innerText = '15秒経ちました';
    return;
    }

    // 秒の表示。小数点(ミリ秒は2桁まで)
    secondElement.innerText = (leftTime / 1000).toFixed(2);

    // 次のフレームで再度update()を実行する
    requestAnimationFrame(update);
}