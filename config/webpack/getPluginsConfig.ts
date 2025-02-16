import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import { BuildOptions } from './types/config';
import  MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const getPluginsConfig = ({ paths } : BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}