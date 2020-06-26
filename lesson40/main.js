// encodeURI(文字列) 文字列をエンコードする
// encodeURIComponent(文字列) 文字列をエンコードする
/**上記2つの違い
* (/ ? & = : @ $ ; , #)の文字をエンコードするかしないか
*/

encodeURI('http://example.com/可愛い猫のページ.html');
// "http://example.com/%E5%8F%AF%E6%84%9B%E3%81%84%E7%8C%AB%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8.html"

encodeURIComponent('http://example.com/可愛い猫のページ.html');
// "http%3A%2F%2Fexample.com%2F%E5%8F%AF%E6%84%9B%E3%81%84%E7%8C%AB%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8.html"

