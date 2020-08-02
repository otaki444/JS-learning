// navigator.onLine ネットワーク状況を取得

// オンラインかオフラインの真偽値
const online = navigator.onLine;
if (online === true) {
    document.querySelector('#log').innerHTML = '現在、オンライン環境です✨';
} else {
    document.querySelector('#log').innerHTML = '現在、ネットワークに接続されていません💦';
}