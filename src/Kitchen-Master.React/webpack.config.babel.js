import path from 'path';
import {HotModuleReplacementPlugin} from 'webpack';

export default {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {presets: ['@babel/env']},
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'node_modules'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // if specifying more loaders
              modules: {localIdentName: '[local]_[hash:base64:5]'},
              sourceMap: false,
            },
          }],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|ttf|woff2?|otf|svg|png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name(resourcePath, resourceQuery) {
            // `resourcePath` - `/absolute/path/to/file.js`
            // `resourceQuery` - `?foo=bar`
            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }
            return '[contenthash].[ext]';
          },
          outputPath: 'images',
        },
      },
    ],
  },
  resolve: {extensions: ['.js', '.jsx']},
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
    historyApiFallback: true,
  },
  plugins: [new HotModuleReplacementPlugin()],
};
