// charAt([インデックス]) 指定インデックスの文字を取得する

// a
'JavaScript'.charAt(3);
// J(引数省略した場合は頭文字を取得)
'JavaScript'.charAt();

// 検索
const searchWordText = document.querySelector('#search-word');

// 県名リスト
const prefectureList = document.querySelectorAll('#prefecture-list button');

// 文字が入力されるたびに、内容をチェックする
searchWordText.addEventListener('keyup', () => {
    // 検索の最初の文字
    const searchWord = searchWordText.value;

    // 県名リストをループ (elementはそれぞれの要素にあたる)
    prefectureList.forEach((element) => {
        // 検索語がなければ全ての要素を表示
        if (!searchWord || searchWord === '') {
            element.classList.remove('hide');
            return;
        }

        // 県名を取得
        const prefectureName = element.dataset.name;
        // フリガナを取得
        const phonetic = element.dataset.phonetic;

        // hideクラスが付与された要素は非表示
        if (
            searchWord.charAt(0) === prefectureName.charAt(0) ||
            searchWord.charAt(0) === phonetic.charAt(0)
        ) {
            // 検索語の最初の文字が一致する場合はhideクラスを除去
            element.classList.remove('hide');
        } else {
            // 検索語の最初の文字が一致しない場合はhideクラスを付与
            element.classList.add('hide');
        }
    });
});