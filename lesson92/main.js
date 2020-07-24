setInterval(() => {
    // 現在時間
    const now = new Date();

    // 時間の数値を取得
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // 時計の針に反映
    const degH = hour * (360 / 12) + minute * (360 / 12 / 60);
    const degM = minute * (360 / 60);
    const degS = second * (360 / 60);

    const elementH = document.querySelector('.hour');
    const elementM = document.querySelector('.minute');
    const elementS = document.querySelector('.second');

    elementH.style.transform = `rotate(${degH}deg)`;
    elementM.style.transform = `rotate(${degM}deg)`;
    elementS.style.transform = `rotate(${degS}deg)`;
}, 50);