// focus フォーカスが当たった時
// blur フォーカスが外れた時

window.addEventListener('focus', () => {
    document.querySelector('#log').innerHTML = 'フォーカスされています！';
});

window.addEventListener('blur', () => {
    document.querySelector('#log').innerHTML = 'フォーカスが外れています';
});