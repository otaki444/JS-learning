// 値 instanceof オブジェクト 値がオブジェクトのインスタンスか
const today1 = new Date();
console.log(today1 instanceof Date);// 結果: true


function currentDate(argument) {
    if (argument instanceof Date) {
        console.log(`現在は${argument.toLocaleDateString()}です`); //toLocaleDateString 年月日
    } else {
        console.log('不正な値です');
    }
}

const today = new Date();
currentDate(today);//結果: 現在は2020/7/16です(例)

const array = [1, 2, 3];
currentDate(array); //結果: 不正な値です