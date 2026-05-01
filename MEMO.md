## TODO

- stylelint作る
  - 調べる：node 24.1.0で動かなかった。22.17.0だと動いた
  - @import "tailwindcss"; を @import url("tailwindcss");に変換してしまい、表示崩れした。避けたい（import-notationをnullにする？）
- htmlhint
  - 調べる：作ったが、もうちょっとちゃんとルール設定調べる
- astroファイルにprettier-plugin-tailwindcss / @trivago/prettier-plugin-sort-importsが効いていない（対応法なさそうであればパッケージをアンインストールする）
  - 下記みるとできるはず？（現状できていない）
  - https://zenn.dev/k_neko3/articles/008e09ffd23907#prettier-plugin-tailwindcssが機能するようになってた
  - @trivago/prettier-plugin-sort-importsはjsファイルには効いているのでeslintに移せなかったらastroに効かなくても残す
- 画像圧縮, webp
  - 調べる：作ったが、メンテナンスされてないパッケージがあるみたいなので新しい方法調べる
- astro buildの時、一度distファイルを空にしないと中身が更新されない
- js作成時にeslintも
- レスポンシブ対応
- FAQアコーディオン化
- スクロール後にヘッダーにシャドウ追加
- ボタンやリンクのインタラクション
- ヘッダーのアクティブ、current page
- imgタグのwidth, height
- headingをh3固定でなく動的タグにする
  - https://docs.astro.build/ja/reference/astro-syntax/#動的タグ

## 次やってみたい

- ABテストの計画にAI利用

## 参考

- https://namaemaker.net/archives/school-name.html
- https://docs.astro.build/ja/tutorial/5-astro-api/1/

## 画像生成メモ

### できなかった

- サイズ指定難しい（figmaで対応）
  - fireflyで画像のサイズを倍にしたり、よくある画角（16:9、4:3とか）にするみたいな機能はあった
- メンバー紹介 > メッセージ の選手の人数を7人から6人にできなかった

### できた

- ページトップ画像でタイトルが載る想定で左にスペース開ける（画像のメインの要素を右に寄せる）
