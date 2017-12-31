const
  path = require('path'),
  webpack = require('webpack'),
  mkdirp = require("mkdirp"),
  bootstrap = require("bootstrap-styl"),
  jeet = require("jeet"),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: './lib/browser/main.jsx'
  },
  output: {
    filename: 'bundle-[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      // Not necessary unless you consume a module using `createClass`
      'create-react-class': 'preact-compat/lib/create-react-class',
    },
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("styles-[hash].css"),
    function () {
      this.plugin("done", function (stats) {
        mkdirp.sync(path.join(__dirname, "target"));
        require("fs").writeFileSync(
          path.join(__dirname, "target", "rev-manifest.json"),
          JSON.stringify(stats.toJson().assetsByChunkName));
      });
    }

  ],
  stylus: {
    use: [bootstrap(),jeet()]
  },
  module: {
    loaders: [
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
