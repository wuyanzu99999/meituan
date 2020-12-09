module.exports = {
    devServer: {
        proxy: {
            '/api': { // 要替换的地址，在本地新建一个/api的访问路径 。项目中，任何以"/api"开头的请求
                target:'http://192.168.43.199:8081', // 替换成啥，要访问的接口域名 。
                changeOrigin: true, // 是否跨域 
                pathRewrite: {
                    '^/api': '' //重写接口，去掉/api， 在代理过程中是否替换掉/api/路径
                }
            }
        }
    }
}
