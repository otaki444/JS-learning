// データ
/**プロパティとはキーと値が組み合わさったもの
 * プロパティ  (id: 1), (name: '鈴木'), (age: 25)
 * キー  id, name, age
 * 値  1, '鈴木', 25
 */
const person = {
    id: 1,
    name: '鈴木',
    age: 25
};
console.log(person);

// 配列, オブジェクト, 関数も格納できる
const object = {
    list: [1, 2, 3],
    subObject: { id: 1, name: '鈴木' },
    method: () => {
        console.log('メソッドを実行');
    }
};

