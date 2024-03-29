const path = require('path');
require("dotenv").config({ path: path.resolve(process.cwd(), '.env.' + process.env.LOCALE) });
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
//打包配置自动忽略console.log等
const TerserPlugin = require("terser-webpack-plugin");

// cross-env负责node环境，mode负责浏览器环境
module.exports = {
    // 控制是否生成，以及如何生成 source map。 https://www.webpackjs.com/configuration/devtool/
    // prod: source-map
    devtool: process.env.NODE_MODE === 'development' ? 'eval-source-map' : false,
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        // publicPath: '/',
        path: path.resolve(__dirname, '../../dist/base'),
        // filename: '[name].[contenthash:8].bundle.js',
        filename: '[name].bundle.js',
        clean: true,
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx', '*'],
        mainFields: ['browser', 'jsnext:main', 'main'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@/assets': path.resolve(__dirname, 'src/assets/'),
            '@common': path.resolve(__dirname, '../../common'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: new Date().getHours() + ' ' + new Date().getMinutes() + ' ' + new Date().getSeconds(),
        }),
    ],
    devServer: { // webpack-dev-server 的配置，配合watch监听文件的变化，自动刷新浏览器，
        static: './dist',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "*"
        }
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            }
        ],
    },
};
