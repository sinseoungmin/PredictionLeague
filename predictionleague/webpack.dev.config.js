var webpack = require('webpack');
var port = 8070;
var devPort = 8080;

module.exports = {
  entry:[
    './src/index.js',
    'webpack-dev-server/client?http://0.0.0.0:'+devPort,
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
          "*": "http://localhost:"+port
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
              presets: ["react", "es2015", "stage-0"],
              cacheDirectory: true
          }
      },
      {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
      },
      {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
};
