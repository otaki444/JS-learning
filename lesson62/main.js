// Array.from(変換対象) 配列に変換する

const greeting = 'Hello';
console.log(Array.from(greeting)); // 結果: ["H", "e", "l", "l", "o"]

// コールバックで新しい配列を作成
// 文字列の一つずつに「!」を追加
const newGreeting = Array.from(greeting, (character) => `${character}!`);
console.log(newGreeting);// 結果: ["H!", "e!", "l!", "l!", "o!"]