var webpack = require("webpack")
var path = require("path")

var sources = [
  path.resolve(__dirname, "src"),
]

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./lib/index.js",
    library: "react-svg-piechart",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: sources,
        enforce: "pre",
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        include: sources,
        loader: "babel-loader",
        query: {
          presets: ["latest"]
        },
      },
    ],
  },
 externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(
      {compress: {warnings: false}}
    ),
  ]
}
