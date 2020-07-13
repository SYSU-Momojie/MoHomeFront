module.exports = {
    devServer: {
        proxy: {
            '^/api/blog': {
                target: 'http://localhost:9871',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/blog': '/blog'
                }
            },
            '^/api/auth': {
                target: 'http://localhost:9871',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/auth': '/blog'
                }
            },
            '^/api/quant': {
                target: 'http://localhost:9874',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/quant': '/quant'
                }
            }
        }
    }
}