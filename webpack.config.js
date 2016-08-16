module.exports = {
  entry: './src/ts/main.ts',
  output: {
    filename: './dist/tetris.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    preloaders: [
      {
        test:  /\.js$/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  }
}
