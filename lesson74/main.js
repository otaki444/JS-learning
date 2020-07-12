// location.reload() リロードする

// 取得
document.getElementById("button").addEventListener("click", function() {
    // リロードする
    window.location.reload();
});

// 経過時間を表示
var i = 0;
// 1秒ごとにカウント
setInterval(function() {
	document.getElementById("time").textContent = ++i;
}, 1000);

