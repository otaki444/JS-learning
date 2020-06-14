const myFruit = 'りんご';

switch (myFruit) {
    case 'りんご': //りんごの場合
        alert('りんごです');
        break;
    case 'みかん': //みかんの場合
        alert('みかんです');
        break;
    default: //どれにも当てはまらない場合
        alert('その他です');
        break;
}

switch (myFruit) {
    case 'りんご':
    case 'みかん':
        alert('りんごかみかんです');
        break;
    default:
        alert('その他です');
}