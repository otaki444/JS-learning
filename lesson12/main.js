/**
 * 税込の値段を返す変数
 * @param price 価格
 * @param tax 税率
 */

function calcFunction (price, tax = 0.08) {
    const result = price + price * tax;
    return result;
}

// taxの引数を省略すると、初期値(0.08)が設定
const result1 = calcFunction(100);
console.log(result1);

// taxの引数を指定すると、その値が設定
const result2 = calcFunction(100, 0.1);
console.log(result2);