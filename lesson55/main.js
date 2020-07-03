// 配列.sort(比較関数) 配列を比較関数に従ってソート
// 戻り値の数値によって順番を決める

const array = [1, 2, 3, 4, 5];

array.sort((a, b) => {
    // aがbより小さいなら、a,bの順に並べる
    if (a < b) {
        return 1;
    }

    // aとbが等しいなら、そのままの順
    if (a === b) {
        return ;
    }

    // aがbより大きいなら、b,aの順に並べる
    if (a > b) {
        return -1;
    }
});

console.log(array); //結果: [5, 4, 3, 2 ,1]