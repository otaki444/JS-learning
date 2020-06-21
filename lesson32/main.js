// split(区切り文字, 何分割するか) 指定範囲内の文字列を取得する
// ハッシュ値から値を取り出すとき

const myUrl ='http://example.com/?id=123456&name=suzuki&age=20';
myUrl.split('&');
// (3) ["http://example.com/?id=123456", "name=suzuki", "age=20"]

myUrl.split(/&|\?/);
// (4) ["http://example.com/", "id=123456", "name=suzuki", "age=20"]

'JavaScript'.split(''); //空文字にすると1文字ずつの配列に
// (10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]