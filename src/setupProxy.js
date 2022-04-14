const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = ( app ) => {
    app.use(
        '/api',
        createProxyMiddleware({
            // target: 'https://192.168.5.94/redfish/v1' ,
            target: 'https://192.168.5.94/redfish/v1',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api': ''
            },
        })
        
    )
}
