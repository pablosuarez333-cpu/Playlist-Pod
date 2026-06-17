const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/audiodb",
    createProxyMiddleware({
      target: "https://theaudiodb.com",
      changeOrigin: true,
      pathRewrite: {
        "^/audiodb": "",
      },
      logLevel: "debug",
    })
  );
};