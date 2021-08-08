# chrome拡張:webページとpopup間での(click等のイベントによる)通信

[参照記事はこちら](https://qiita.com/inabajunmr/items/d56d3a477b83487222f0)
[](http://www.nononagainfo.com/2019/08/chromeunchecked-runtimelasterror-could.html)

※getBackgroundPageで変数をpopup.jsに持ってくるときは、let or constで定義されたものは持ってこれない。(varで定義された変数でないとダメ)
※webclassのようにframeタグ内のdocumentオブジェクト内の要素をいじるときはcontentDocument or contentWindow.documentで指定しなくてはならない。[参照記事はこちら](https://shanabrian.com/web/javascript/element-contentdocument.php)