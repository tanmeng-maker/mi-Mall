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
    },
    // 删除文件预加载，实现真正按需
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
    // publicPath: '/app',//部署应用包时的基本 URL
    // outputDir: 'dist2', //修改打包目录名称
    // indexPath: 'index2.html', //修改入口文件
    // lintOnSave:false//ESLint校验开关
    // productionSourceMap:false//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
}