// continue (forループの処理を途中でスキップする)
for (let index = 0; index < 10; index++) {

    // ２で割り切れる数をスキップする
    if (index % 2 === 0) {
        continue;
    }

    // 奇数のみが出力
    console.log(index);
}

// ループ終了時に実行される
console.log('ループ終了');