let course = 'up,down,right,left';

// courseを「,」で区切り、配列を作成する
let array = course.split(',');
console.log(array); //結果: ["up", "down", "right", "left"]

// arrayを「,」で結合させ、文字列に変換する
let string = array.join(',');
console.log(string); //結果: up,down,right,left

// toString()によっても同様に変換できる
let name = ['佐藤', '鈴木', '高橋', '後藤'];
console.log(name.toString());