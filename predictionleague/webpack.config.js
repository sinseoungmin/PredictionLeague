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
              presets: ["react", "es2015"],
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
