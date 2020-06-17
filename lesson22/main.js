const character = document.querySelector('.character');

// 角度
let degree = 0;

// ループ処理
loop();

/**
 * 画面更新ごとに実行される関数
 */
function loop() {
    // 回転させたい角度をラジアンで求める (Math.PI=円周率)
    const rotation = (degree * Math.PI) / 180;
    // 回転角からを位置を求める (Math.cos=コサイン  Math.sin=サイン)
    const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
    const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;
    // characterの位置として反映
    character.style.left = `${targetX}px`;
    character.style.top = `${targetY}px`;
    // 角度を1度増やす
    degree += 1;
    // 次の画面更新タイミングでloop()を実行する (requestAnimationFrame()はアニメーションを更新する)
    requestAnimationFrame(loop);
}