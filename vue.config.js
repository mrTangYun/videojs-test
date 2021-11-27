const webpack = require("webpack");
const GitRevisionPlugin = require("git-revision-webpack-plugin");

const gitRevisionPlugin = new GitRevisionPlugin();
module.exports = {
  // options...
  publicPath: "./",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://49.234.113.74:7000",
        ws: true,
        changeOrigin: true
      },
    }
  },
  configureWebpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new webpack.DefinePlugin({
        COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash())
      })
      // new HtmlWebpackGitRevisionPlugin()
    ];
  }
};
