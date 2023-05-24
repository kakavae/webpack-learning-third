/* 
  当前模块导出的时候会被postcss-loader使用
*/

module.exports = {
  plugins: [
    /* 给css增加前缀解决低版本浏览器的兼容性 */
    require('autoprefixer'),
    /* 可以嵌套写css */
    require('postcss-nested')
  ]
}