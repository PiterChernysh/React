const path = require("path");

module.exports = {
  entry: "./dev/script.js",
  output: {
    path: path.resolve(__dirname, "site"),
    filename: "bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'site'),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
