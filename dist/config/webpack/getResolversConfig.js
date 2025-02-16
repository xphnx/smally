import path from 'path';
var sourceDirectoryPath = path.resolve(__dirname, '../../src');
export var getResolversConfig = function (options) {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@app': path.resolve(sourceDirectoryPath, 'app'),
            '@entities': path.resolve(sourceDirectoryPath, 'entities'),
            '@features': path.resolve(sourceDirectoryPath, 'features'),
            '@pages': path.resolve(sourceDirectoryPath, 'pages'),
            '@shared': path.resolve(sourceDirectoryPath, 'shared'),
            '@widgets': path.resolve(sourceDirectoryPath, 'widgets'),
        },
    };
};
