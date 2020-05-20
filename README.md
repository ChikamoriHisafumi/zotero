# Zotero
Zoteroリファレンス自動生成します。

Zoteroから出力（Export）できるファイルから、リファレンスを自動で生成する機能がついたものです。
使い方については、YouTubeにて公開しております。

利用法については、大まかな流れは以下のとおりとなります。

（１）zoteroからcsvをエクスポートする

https://www.youtube.com/watch?v=0C_GHGgeZos

（２）GitHubからリファレンス自動生成機能をダウンロードする

https://www.youtube.com/watch?v=t5rndVL7goU

（３）リファレンス自動生成機能の使い方

https://www.youtube.com/watch?v=Zoz6ZWiksbw

お手数おかけしますが、ご視聴の上利用方法をご理解いただけますと幸いです。

今後のバージョンアップに際して、皆さんからのフィードバックが必要ですので、適宜メールなどでお願いします。

・カラムの追加削除（現在のところ87カラムのうち、10カラムのみが読み込み対象となっております）

・リファレンスを生成し終わったら、どのような条件で生成したのかをスクリーンショットなどで私に送ってください。そうすれば、次回からその条件をボタンひとつで出せるようにすることもできます。

# 開発者メモ

Zoteroデスクトップ版では重複に注意すること。

インポートをしていると知らないうちに重複がどんどん増えていき、コレクションを削除するときにも「Delete collection」（正しくは「Delete Collection and Items」）を選択してしまうと、Trashがとんでもない量のレコードで溢れているなんてこともある。

Zoteroデスクトップ版では、一気に消す機能がないみたいなので、1個1個消さなければならなくなる。そんなときには、C:\Users\chikamori\Zoteroを開いて見るとsqliteファイルがあるので、それらを削除すればよい。

better-bibtex.sqlite

better-bibtex.sqlite-journal

zotero.sqlite

zotero.sqlite-journal

ただ、削除できるのはZoteroを閉じているときのみ。これらのファイルはZoteroを開いたら、また生成できるので大丈夫。空のMy Libraryができる。

Zoteroのエクスポート、インポートは今の所Zotero RDFフォーマットで成功している。今のところは、これでやるのが無難か。


