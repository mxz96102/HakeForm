/**
 * Created by Doming on 2017/3/20.
 */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './build/dist.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
          plugins: ['syntax-dynamic-import']
        }
      }]
    }]
  }
};