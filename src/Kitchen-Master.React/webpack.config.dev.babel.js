import merge from 'webpack-merge';
import { EnvironmentPlugin, HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig from './webpack.config.babel';

export default merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        hotOnly: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: { localIdentName: '[local]_[hash:base64:5]' },
                            sourceMap: true,
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(eot|ttf|woff2?|otf|svg|png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name(resourcePath, resourceQuery) {
                        return '[path][name].[ext]';
                    },
                    outputPath: 'assets',
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        }
    },
    plugins: [
        new EnvironmentPlugin(
            {
                API_BASE_URL: 'https://localhost:5001/api/',
                API_IMAGE_URL: 'https://localhost:5001/images/'
            }
        ),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devtool: 'inline-source-map'
});
