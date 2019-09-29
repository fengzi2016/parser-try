const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
     devServer: {
         contentBase: './dist'
       },
     plugins: [

         new HtmlWebpackPlugin({
           title: 'Output Management'
         })
       ],
};