

module.exports = {
  // 配置代理服务器
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ""
        }
      },
    }
  }
}



