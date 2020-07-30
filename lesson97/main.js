// document.title タイトル

document.querySelector('#dog').addEventListener('click', () => {
    document.title = '🐶dog';
});

document.querySelector('#cat').addEventListener('click', () => {
    document.title = '🐱cat';
});

document.querySelector('#bird').addEventListener('click', () => {
    document.title = '🦜bird';
});