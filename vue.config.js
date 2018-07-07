var path = require('path')
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.plugins.delete("fork-ts-checker");
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        return { ...options, transpileOnly: false };
      });
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
