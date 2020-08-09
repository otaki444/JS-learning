// DOMContentLoaded HTMLドキュメントの解析完了のタイミングで処理を行いたいとき
// load 全リソースの読み込み完了時に処理を行う

window.addEventListener('DOMContentLoaded', () => {
    //.boxの数を取得
    const boxNum = document.querySelectorAll('.box').length;

    //結果を出力
    document.getElementById('log').innerHTML = `boxの数は${boxNum}個です`;
});