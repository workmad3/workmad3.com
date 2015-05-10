/**
 * @see http://webpack.github.io/docs/configuration.html
 * for webpack configuration options
 */
module.exports = {
  // 'context' sets the directory where webpack looks for module files you list in
  // your 'require' statements
  context: __dirname + '/app/assets/javascripts',

  // 'entry' specifies the entry point, where webpack starts reading all
  // dependencies listed and bundling them into the output file.
  // The entrypoint can be anywhere and named anything - here we are calling it
  // '_application' and storing it in the 'javascripts' directory to follow
  // Rails conventions.
  entry: {
    application: '_application.js'
  },

  // 'output' specifies the filepath for saving the bundled output generated by
  // wepback.
  // It is an object with options, and you can interpolate the name of the entry
  // file using '[name]' in the filename.
  // You will want to add the bundled filename to your '.gitignore'.
  output: {
    filename: '[name].bundle.js',
    // We want to save the bundle in the same directory as the other JS.
    path: __dirname + '/app/assets/javascripts',
  },

  resolve: {
    root: [
      __dirname + '/app/assets/javascripts'
    ],
    extensions: [ '', '.webpack.js', '.web.js', '.js', '.js.jsx', '.jsx' ]
  },

  // Turns on source maps
  // Prefix with a '#' to squash the FF warnings that say:
  // 'Using //@ to indicate sourceMappingURL pragmas is deprecated.
  // Use //# instead'
  devtool: '#eval-source-map',

  // The 'module' and 'loaders' options tell webpack to use loaders.
  // @see http://webpack.github.io/docs/using-loaders.html
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader' },
    ]
  }
};
