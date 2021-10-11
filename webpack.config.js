/* eslint-disable prettier/prettier */
const pkg = require('./package.json');
var path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
        library: pkg.name,
        libraryTarget: "commonjs2"
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    target: 'node',
    externals: {
        react: "react",
        redux: 'redux',
        "react-redux": "react-redux"
    }
};
