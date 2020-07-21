const today = new Date();
const newYear = new Date('2020/01/01');
const diffTime = today.getTime() - newYear.getTime();
const diffDate = diffTime / (24 * 60 * 60 * 1000);
document.querySelector('#date').innerHTML = `年明けから${Math.round(diffDate)}日、経過しました`;
