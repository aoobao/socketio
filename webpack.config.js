
const path = require('path');
const webpack = require('webpack');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require("clean-webpack-plugin");
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const BabiliPlugin = require('babili-webpack-plugin');

const PATHS = {
    app: path.join(__dirname,'app'),
    build: path.join(__dirname ,'build')
};

// const extractTextPlugin = new ExtractTextPlugin({
//     filename: '[name]-[hash].css',
//     ignoreOrder: true
// })

module.exports = {
    //devtool:'eval-source-map',
    // devServer: {
    //     host: process.env.HOST,
    //     port: 8080,
    //     inline: true,
    //     //historyApiFallback: true,
    //     // overlay: {
    //     //     errors: true,
    //     //     warnings: true
    //     // }
    // },
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: "app-[hash].js"
    },
    module: {
        // loaders: [{
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: 'babel-loader'
        // },
        // {
        //     test: /\.css$/,
        //     loader: ['style-loader', {
        //         loader: 'css-loader',
        //         options: {
        //             modules: true
        //         }
        //     }]
        // }
        //],
        // rules: [
        //     {
        //         test: /\.css$/,
        //         use: extractTextPlugin.extract({
        //             fallback: "style-loader",
        //             use: {
        //                 loader: "css-loader",
        //                 options: {
        //                     modules: true
        //                 }
        //             }
        //         })
        //     }
        // ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     //template: PATHS.app + "/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        //     title: 'webPack demo'
        // }),
        // new CleanWebpackPlugin('build/*.*', {
        //     root: __dirname,
        //     verbose: true,
        //     dry: false
        // }),
        // extractTextPlugin,
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'vendor'
        // }),
        //new BabiliPlugin(),
    ]
};
