const webpack = require('webpack')
const path = require('path')

module.exports = {
    // エントリーポイントの設定
    entry: './src/index.js',
    // 出力の設定
    output: {
        // 出力するファイル名
        filename: 'bundle.js',
        // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
        path: path.join(__dirname, 'dist/')
    }
}
