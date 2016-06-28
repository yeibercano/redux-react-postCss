const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src/js/client.js'),
  styles: path.join(__dirname, 'src/styles/main.css'),
  build: path.join(__dirname, 'public')
};

module.exports = {
  // context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    app: PATHS.app,
    styles: [ PATHS.styles ]
  },
  devtool: 'source-map',
  output: {
    path: PATHS.build,
    filename: 'js/[name].[hash].js',
    // This is used for require.ensure. The setup
    // will work without but this is useful to set.
    chunkFilename: '[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /src\/.+.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          // plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.css$/,
         // loader:  ExtractTextPlugin.extract('style-loader', 'css-loader'),  
        // include: __dirname + '/src',
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
         loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader']),
        include: __dirname + '/src/styles',
      },
    ]
  },
  postcss: [
    require('postcss-animation'),
    require('postcss-color-rebeccapurple'),
    require('autoprefixer'),
  ],
  plugins: [
    new ExtractTextPlugin('/styles/styles.css'),
    new HtmlWebpackPlugin({
      title: 'Postcss',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin([path.join(PATHS.build, 'js'), path.join(PATHS.build, 'styles')], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
    }),
    new ManifestPlugin()

  ]
  // plugins: debug ? [ 
  // new ExtractTextPlugin('/styles/[name].css'),
  // new HtmlWebpackPlugin({
  //     title: 'Postcss',
  //     filename: 'index.html',
  //     template: 'src/index.html'
  //   }),
  //   new CleanWebpackPlugin([path.join(PATHS.build, 'js'), path.join(PATHS.build, 'styles')], {
  //       // Without `root` CleanWebpackPlugin won't point to our
  //       // project and will fail to work.
  //       root: process.cwd()
  //   }),
  //   new ManifestPlugin()

  // ] : [
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  // ],
};