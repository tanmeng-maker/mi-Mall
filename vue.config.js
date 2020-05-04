module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/assets/scss/base.scss";` //引入全局变量   
            }
        }
    }
}