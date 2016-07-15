const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/www',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: './www',
    port: 8080,
  },
};
