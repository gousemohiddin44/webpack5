let mode = "development";

if(process.env.NODE_ENV === 'production') {
    mode = "production";
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ]
    },

    devtool: "source-map", // false - for readability in build main.js // source-map - for viewing from souce code,not from build main.js
    devServer: {
        contentBase: './dist',
    }
}