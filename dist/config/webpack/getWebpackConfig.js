import { getPluginsConfig } from './getPluginsConfig';
import { getLoadersConfig } from './getLoadersConfig';
import { getResolversConfig } from './getResolversConfig';
import { getDevSever } from './getDevServer';
export var getWebpackConfig = function (options) {
    var paths = options.paths, mode = options.mode, isDev = options.isDev;
    return {
        mode: mode,
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
    };
};
