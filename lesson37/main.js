// /パターン/.test(文字列) 文字列がパターンに一致するかどうか

/J/.test('JavaScript'); // 「J」が「Javascript」に含まれているか＝true
/^iP/.test('iPhone'); // 「iPhone」が「iP」で始まっているか＝true
/\D/.test('鈴木'); // 「鈴木」に数字が含まれているかどうか＝false
/Java.*/.test('JavaScript'); // 「Jav」の後「a」が０回以上続くか＝true
/鈴.*郎/.test('鈴木一郎'); // 「鈴郎」または「鈴」と「郎」の間文字が含まれるか＝true
/\d+-\d+-\d+/.test('090-1234-5678'); // 「数字ー数字ー数字」という形か＝true

// 電話番号の入力欄
const phoneNumberText = document.querySelector('#phoneNumberText');

// 警告メッセージ
const warningMessage = document.querySelector('#warningMessage');

// 文字が入力されるたびに内容のチェックを行う
phoneNumberText.addEventListener('keyup', () => {
    // 入力された電話番号
    const phoneNumber = phoneNumberText.value;
    // 電話番号に「ー」が含まれている場合は、''(空文字)に置き換える
    const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');

    // 0から始まる10桁か11桁の数字かどうかチェック
    if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false) {
        warningMessage.innerText = '電話番号を正しく入力してください';
    } else {
        warningMessage.innerText = '';
    }
});
