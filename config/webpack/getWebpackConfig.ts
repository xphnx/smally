import { Configuration } from 'webpack';
import { getPluginsConfig } from './getPluginsConfig';
import { getLoadersConfig } from './getLoadersConfig';
import { getResolversConfig } from './getResolversConfig';
import { BuildOptions } from './types/config';

export const getWebpackConfig = (options: BuildOptions): Configuration => {
    const { paths, mode } = options;
    
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
            rules: getLoadersConfig(),
          },
        resolve: getResolversConfig(),
    }
}