// 両端にスペース(半角スペース)がある場合
const targetString1 = '     こんにちは    ';
const trimmedString1 = targetString1.trim();
console.log(trimmedString1); //結果 'こんにちは'

// 改行コードに末尾がある場合
const targetString2 = 'りんごを食べました\n';
const trimmedString2 = targetString2.trim();
console.log(trimmedString2); //結果 'りんごを食べました'

// 文字列中の空白は取り除かれない
const targetString3 = '   りんご。   みかん。   ';
const trimmedString3 = targetString3.trim();
console.log(trimmedString3); //結果 'りんご。   みかん。'