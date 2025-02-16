import path from 'path';
import { getWebpackConfig } from "./config/webpack/getWebpackConfig";
export default (function (env) {
    var paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
    };
    var mode = env.mode || 'development';
    var PORT = env.port || 300;
    var isDev = mode === 'development';
    var config = getWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT
    });
    return config;
});
