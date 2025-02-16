import { Configuration } from 'webpack';
import { getPluginsConfig } from './getPluginsConfig';
import { getLoadersConfig } from './getLoadersConfig';
import { getResolversConfig } from './getResolversConfig';
import { BuildOptions } from './types/config';
import { getDevSever } from './getDevServer';
import path from 'path';

export const getWebpackConfig = (options: BuildOptions): Configuration => {
    const { paths, mode, isDev } = options;
    
    return {
        mode,
        entry: paths.entry,
        output: {
          filename: '[name][contenthash].js',
          path: paths.build,
          clean: true,
        },
        plugins: getPluginsConfig(options),
        module: {
            rules: getLoadersConfig(options),
          },
        resolve: getResolversConfig(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? getDevSever(options) : undefined
    }
}