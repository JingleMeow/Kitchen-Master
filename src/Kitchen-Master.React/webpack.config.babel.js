import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      _: path.resolve(__dirname, 'src')
    }
  },
}
