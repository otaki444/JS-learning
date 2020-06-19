// replace(文字列1, 文字列2) 文字列1を文字列2に置き換える
// replace(正規表現, 文字列) 正規表現によって文字列を置き換える

// image1.pngをimage2.pngに置き換える
const imageName = 'image1.png';
imageName.replace('1.png', '2.png');
console.log(imageName.replace('1.png', '2.png'));

// 文字列内の改行コードを削除
const inputText = '鈴木\n一郎';
console.log(inputText.replace('\n', ''));


const phoneNumber = '123-4567-8901';
// 一つのハイフンしか削除できないため「1234567-8901」となる
console.log(phoneNumber.replace('-', ''));
// gオプションで全てのハイフンを削除
console.log(phoneNumber.replace(/-/g, ''));