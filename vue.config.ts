module.exports = {
  publicPath: '/', //  解决打包之后静态文件路径404的问题
  outputDir: 'dist', //  打包后的文件夹名称，默认dist
  lintOnSave: false,
  devServer: {
    port: 8083, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  productionSourceMap: false,
  runtimeCompiler: true,
}
