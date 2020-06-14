// 条件式複数ver
const myPrice = 100;

if (myPrice >= 50) {
    alert('myPriceは50以上です');
} else if (myPrice >=10) {
    alert('myPriceは10以上50未満です');
} else {
    alert('myPriceは10未満です');
}

// 条件式1つver
const randomNum = Math.random() * 10;

if (randomNum >= 5) {
    alert('randomNumは5以上');
} else {
    alert('randomNumは5未満');
}

// 1行のみver
if (randomNum >= 8) alert('randomNumは8以上');

if (true) {
    alert('Hello');
}

