const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: {
      name: 'p5',
      type: 'umd',
    },
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  devServer: { // webpack-dev-server 的配置，配合watch监听文件的变化，自动刷新浏览器，
    static: './lib',
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "*"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

// module.exports = {
//     // entry: './src/index.js',

//     entry: path.join(__dirname, 'src/index'),
//     output: {
//         filename: 'index.js',
//         path: path.resolve(__dirname, 'lib'),
//         clean: true,
//         globalObject: 'this',
//     },

//     mode: "development",

//     devtool: "eval-source-map", // 'inline-source-map',
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: new Date().getHours() + ' ' + new Date().getMinutes() + ' ' + new Date().getSeconds(),
//         }),
//     ],
//     devServer: { // webpack-dev-server 的配置，配合watch监听文件的变化，自动刷新浏览器，
//         static: './dist',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env']
//                     }
//                 }
//             }
//         ],
//         rules: [
//             {
//                 test: /\.scss$/i,
//                 use: ['style-loader', 'css-loader', 'sass-loader']
//             },
//             // ],
//             // rules: [

//             {
//                 test: /\.(png|svg|jpg|jpeg|gif|JPG)$/i,
//                 type: 'asset/resource',
//             },
//             // {
//             //   test: /\.json5$/i,
//             //   type: 'json',
//             //   parser: {
//             //     parse: json5.parse,
//             //   },
//             // },
//         ]
//     },
//     optimization: {
//         runtimeChunk: 'single',
//     },
// };