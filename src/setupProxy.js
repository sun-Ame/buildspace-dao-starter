const { createProxyMiddleware } = require('http-proxy-middleware');
  module.exports = function(app) {
  // /api 表示代理路径
  //target 表示目标服务器的地址
     app.use(
         'https://cloudflare-ipfs.com/ipfs/bafkreiccvre455iw5zuelm73gfa3ig5or53ugou7mq2itho7l6js5pjrpe',
          createProxyMiddleware({
             target: 'http://127.0.0.1:3000',
            changeOrigin: true,
         })
     );
 }