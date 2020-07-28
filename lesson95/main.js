// prompt(内容, 初期値) 文字入力プロンプトを表示

const message = prompt('元気ですか？', 'はい！');
document.querySelector('#message').innerHTML = message;
