const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const bundleFolderName = './build';

module.exports = {
  entry: path.join(__dirname, './src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, bundleFolderName),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, './src'),
      },
      {
        test: /\.(j|t)sx?$/,
        include: [path.resolve(__dirname, './src')],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        // 排除node_modules底下的
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // 正则匹配文件路径
        exclude: /node_modules/,
        use: [
          // loader生效是从下往上的
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, './src'), // 只让loader解析我们src底下自己写的文件
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }, 
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [bundleFolderName],
    }),
    // 参数是一个数组，数组中是需要删除的目录名
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    overlay: {
      // 当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true,
    },
    inline: true,
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
