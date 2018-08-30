module.exports = {
  // 基本路径
  baseUrl: './',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 服务器端口号
  devServer: {
    port: 8080,
    proxy: {
      '/apis': {  
          target: 'http://pre-sg.feifanxinli.com/api',  // 接口域名
          // target: 'http://101.132.143.75:8090/api',
          // target: 'http://192.168.0.120:8080/api',
          changeOrigin: true,  //是否跨域
          pathRewrite: {
              '^/apis': ''   //需要rewrite的,
          }              
      }
    }
  },
}
