/**
正規表現のパターン
/パターン/ (スラッシュで囲む)
x (xという1文字)
xyz (xyzという文字列)
[xyz] (x,y,zの1文字)
[a-z] (aからzの間の1文字)
[^xyz] (x,y,z以外の1文字)
[^a-z] (aからz以外の1文字)
abc|xyz (abcまたは、xyz)
{数字} (繰り返し回数)
^x (最初の文字がx)
x＄ (最後の文字がx)
. (改行文字を除く)
x* (xが０回以上続く)
\ (直後の文字をエスケープする)
\d (数字[0-9]と同じ)
\D (数字[^0-9]と同じ)
\w (英数字、アンダースコア)
\s (スペース、タブ、改ページ)
\S (空白以外の文字)
\t (水平タブ)
\n (改行コード)
*/

// 正規表現を使った場合
if (/iPhone|iPod|Mac/.test(navigator.userAgent)) {
    alert('あなたのアクセスしている端末はios端末です');
}

// 正規表現を使わなかった場合
if (
    navigator.userAgent.includes('iPhone') ||
    navigator.userAgent.includes('iPod') ||
    navigator.userAgent.includes('Mac')
) {
    alert('アクセスしているブラウザーはios端末です');
}