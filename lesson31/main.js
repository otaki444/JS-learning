// submitButtonをクリックしたときの処理
document.querySelector('#submitButton').addEventListener('click', (event) => {
    // 電話番号を取得
    const phoneNumber = document.querySelector('#phoneNumberText').value;

    // 電話番号にハイフンが入力されている場合は、''(空文字)に置き換える
    const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');

    alert(`電話番号は${trimmedPhoneNumber}です`);

    // ボタンのデフォルトの挙動をキャンセル
    event.preventDefault();
});