# Jestのテスト用リポジトリ

## e2eテスト
今回は、pageのvalidateをとおって正しく判別されているかで使います。

[参考1](https://qiita.com/Hassan/items/3e9959fae34c958017fe)
[参考2](https://qiita.com/akameco/items/0b41f7b1c55f0fa30ac5)


## runInBandコマンドについて
通常、jestはタスクを並列処理しますが、これを入れることによって直列実行が可能となります。  
(e2eテストをするにserverをlistenしなければならないため、並列実行だとlistenせずにほかタスクのチェックを行ってしまう。)
[https://jestjs.io/ja/docs/cli#--runinband](https://jestjs.io/ja/docs/cli#--runinband)