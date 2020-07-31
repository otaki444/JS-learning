// element.requestFullscreen() フルスクリーンで表示
// document.exitFullscreen() フルスクリーン解除

const button = document.querySelector('#btn');
button.addEventListener('click', (event) => {
    // フルスクリーン表示にする
    myRequestFullScreen(document.body);
});

function myRequestFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        // safari chrome
        element.webkitRequestFullscreen();
    }
}

const buttonExit = document.querySelector('#btnExit');
buttonExit.addEventListener('click', (event) => {
    // フルスクリーン表示にする
    myCancelFullScreen();
});

function myCancelFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
        // safari chrome
        document.webkitCancelFullScreen();
    }
}
