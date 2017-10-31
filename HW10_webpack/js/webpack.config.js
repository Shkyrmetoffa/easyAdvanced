const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './app.js',
        vendor: 'jquery'
    },
    // {
    //     footer: './scripts/footer.js',
    //     header: './scripts/header.js'
    // },

    context: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['env'] }
            }
        }]
    },
    plugins: [
        new htmlPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
    ]
}