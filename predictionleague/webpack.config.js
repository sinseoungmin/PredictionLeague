module.exports = {
  entry:'./src/index.js',

  output:{
    path:'public',
    filename: 'bundle.js'
  },

  devServer:{
    inline:true,
    port:7777,
    contentBase:__dirname+'/public/',
    historyApiFallback: true
  },

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
