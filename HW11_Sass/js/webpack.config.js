const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    textPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //entry: './app.js', //path expected
    entry: {
        main: './app.js',
        vendor: ['jquery'] //[array of filepaths] if npm used - just name
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name]-bundle.js', //filename expected
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['env'] }
                }
            },
            // {
            //  test: /\.css$/,
            //  use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.s?css$/,
                use: textPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new textPlugin({
            filename: 'main.css',
        })
    ]
};