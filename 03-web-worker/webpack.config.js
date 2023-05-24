const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    publicPath: '/',
    clean: true,
  },

  mode: 'development',

  devServer: {
    static: path.resolve(__dirname, './dist')
  },

  resolve: {
    /* 配置打包的路径依赖，避免一直写相对路径导致项目文件路径难以维护 */
    alias: {
      '@': path.resolve(__dirname, './src'),
    },

    /* 配置打包的时候省略后缀，要首先解析为何种文件 */
    /* 可以省略，如果要写，必须要写在双引号里面 */
    extensions: ['.js', '.json', '.vue'],
  },

  module: {
    rules: [
      /* 对css做postcss-loader的额外处理--解决兼容性等等 */
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          {
            loader: 'postcss-loader',
          }
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}