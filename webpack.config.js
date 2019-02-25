const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            title: "My cool page",
            template: "./src/index.html",
            filename: './index.html'
        }),
        new HTMLWebPackPlugin({
            title: "My cool link",
            template: "./src/link/index.html",
            filename: './link/index.html'
        }),
    ]
}