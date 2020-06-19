// slice(開始インデックス, 終了インデックス) 指定範囲内の文字列を取得
// substring(開始インデックス, 終了インデックス) 指定範囲内の文字列を取得

'JavaScript'.slice(0, 4); //Java
'JavaScript'.slice(0); //JavaScript

'JavaScript'.substring(0, 4); //Java
'JavaScript'.substring(0); //JavaScript

// sliceの場合
'鈴木のポートフォリオ'.slice(3, -4); //ポート
'鈴木のポートフォリオ'.slice(-4, -1); //フォリ
// substringの場合(マイナス値が0になる  )
'鈴木のポートフォリオ'.substring(3, -4); //鈴木の
'鈴木のポートフォリオ'.substring(-4, -1); //範囲外のため ''空文字が返る

/**
 * slice substringの違い
 * 開始インデックスが終了インデックスより大きくなった際に挙動が変化
 * substringの場合、開始インデックスと終了インデックスを入れ替えて処理される
*/
'ようこそ日本へ'.slice(3, 1); //結果''空文字が返る
'ようこそ日本へ'.substring(3, 1); //1と3が入れ替わり結果、'うこ'が入る

// substr(開始インデックス, 取得文字数) 指定範囲内の文字列を取得
'JavaScript'.substr(4, 6); //結果 Script