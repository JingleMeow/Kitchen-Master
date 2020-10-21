import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { EnvironmentPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import baseConfig from './webpack.config.babel';

export default merge(baseConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: { localIdentName: '[local]_[hash:base64:5]' },
                            sourceMap: false,
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
                        return '[contenthash].[ext]';
                    },
                    outputPath: 'assets',
                },
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new EnvironmentPlugin(
            {
                API_BASE_URL: 'https://kmapi.bellabeta.dev/api/',
                API_IMAGE_URL: 'https://kmapi.bellabeta.dev/images/'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: '[name].[contentHash].css'
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './index.html'
            }
        ),
        new CopyPlugin(
            {
                patterns: [
                    {
                        from: 'public',
                        to: 'public'
                    }
                ]
            }
        )
    ]
});
