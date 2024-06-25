const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/todo",
    createProxyMiddleware({
      target: "https://jweidon.pythonanywhere.com",
      changeOrigin: true,
    })
  );
};
