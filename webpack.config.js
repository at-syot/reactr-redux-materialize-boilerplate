const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src/css'),
            path.resolve('./src/libs')
        ]
    },
    // devtool: "inline-source-map",
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
                options: {
                    presets: ["react", "env"]
                }
            },
            // css, scss 
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
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
                    'file-loader'
                ]
            }
        ]
    }
}