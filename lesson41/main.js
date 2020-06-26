// decodeURI(文字列) encodeURIでエンコードされた文字列をデコード
// decodeURIComponent(文字列) encodeURIComponentでエンコードされた文字列をデコード

decodeURI("http://example.com/%E5%8F%AF%E6%84%9B%E3%81%84%E7%8C%AB%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8.html");
// "http://example.com/可愛い猫のページ.html"

decodeURIComponent("http%3A%2F%2Fexample.com%2F%E5%8F%AF%E6%84%9B%E3%81%84%E7%8C%AB%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8.html");
// "http://example.com/可愛い猫のページ.html"