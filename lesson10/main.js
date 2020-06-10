function myFunction(a, b) {
    // aが100以上ならaを返す
    if (a >= 100) {
        return a;
    }
    // aが100未満ならbを返す
    return b;
}
const myResult = myFunction(50, 20);
console.log(myResult); //aが100未満のためbを表示

const myResult2 = myFunction(150, 30);
console.log(myResult2); //aが100以上のためaを表示


function calcFunction(price, tax) {
    const result = price + price * tax;
    return result;
}
const totalPrice =　calcFunction(100, 0.1);
console.log(totalPrice); //結果 110


function hello() {
    console.log('こんにちは');
}
hello();