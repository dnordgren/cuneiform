const path = require('path');

const config = {
  entry: {
    background: './src/chrome/background',
    content_script: './src/chrome/content_script',
    options: './src/chrome/views/options',
    popup: './src/chrome/views/popup',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
  }

  return config;
};
