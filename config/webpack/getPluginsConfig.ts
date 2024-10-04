import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import { BuildOptions } from './types/config';

export const getPluginsConfig = ({ paths } : BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin()
    ]
}