const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
let target = "web";

if(process.env.NODE_ENV === 'production') {
    mode = "production";
    target = 'browserslist'
}

module.exports = {
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin()
    ],

    devtool: "source-map", // false - for readability in build main.js // source-map - for viewing from souce code,not from build main.js
    devServer: {
        contentBase: './dist',
        hot: true,
    }
}