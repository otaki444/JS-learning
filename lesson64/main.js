const number = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
const shuffleNumber = shuffleArray(number);
console.log(shuffleNumber);

const name = ['佐藤', '鈴木', '藤田', '内山', '福田'];
const shuffleName = shuffleArray(name);
console.log(shuffleName);

/**
 * 配列をシャッフル
 * 元の配列は変更せず、新しい配列を返す
 * @param originalArray 元の配列
 * @returns シャッフルされた配列
 */
function shuffleArray(originalArray) {
    // 元の配列の複製を作成
    const array = originalArray.concat();
    const arrayLength = array.length;
    // Fisher-Yatesのアルゴリズム
    for (let i = arrayLength - 1; i >= 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }

    return array;
}