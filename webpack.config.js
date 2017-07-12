const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: [
            /* mormalize: should be on top of application entry point! */
            './src/normalize.js', 
            './src/index.js'
        ],
        vendors: [
            'babel-polyfill',
            'react',
            'react-dom'
        ]
    },
    output: {
        filename: 'static/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src/css'),
            path.resolve('./src/libs')
        ]
    },
    devtool: "eval",
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("static/css/[name].css")
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000,
        watchOptions: {
            poll: true
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot-loader/webpack', 'babel'],
            include: path.join(__dirname, 'src')
        }],
        rules: [
            // react and es2015+
            { 
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: "babel-loader",
            },
            // css, scss 
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },

            // image 
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader?limit=1024&name=fonts/[name].[ext]'
                ]
            }
        ]
    }
}