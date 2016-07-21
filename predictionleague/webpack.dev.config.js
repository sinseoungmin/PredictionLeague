var webpack = require('webpack');


module.exports = {
  entry:[
    './src/index.js',
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server'
  ],

  output:{
    path:'/',
    filename: 'bundle.js'
  },

  devServer: {
      hot: true,
      filename: 'bundle.js',
      publicPath: '/',
      historyApiFallback: true,
      contentBase: './public',
      proxy: {
          "*": "http://localhost:3000"
      }
  },

  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],

  module:{
    loaders:[
      {
          test: /[\.jsx|\.js]$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ["react", "es2015", "stage-2"],
              cacheDirectory: true
          }
      },
      {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
      },
      {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader'
      }
    ]
  }
};
