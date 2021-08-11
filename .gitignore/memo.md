# chrome拡張:webページとpopup間での(click等のイベントによる)通信

[参照記事はこちら](https://qiita.com/inabajunmr/items/d56d3a477b83487222f0)
[](http://www.nononagainfo.com/2019/08/chromeunchecked-runtimelasterror-could.html)

※getBackgroundPageで変数をpopup.jsに持ってくるときは、let or constで定義されたものは持ってこれない。(varで定義された変数でないとダメ)
※webclassのようにframeタグ内のdocumentオブジェクト内の要素をいじるときはcontentDocument or contentWindow.documentで指定しなくてはならない。[参照記事はこちら](https://shanabrian.com/web/javascript/element-contentdocument.php)

※複数のメッセージは送れる？(tabsを見た感じよくわからん。)ただjson形式で複数のデータを送り、content.js側でif文やらで場合分け→forEachとかで回せばいけそう？

# SU_video_speed_controler
![video_controler](/image/video_controler.png)