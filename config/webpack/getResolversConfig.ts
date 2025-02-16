import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';

const sourceDirectoryPath = path.resolve(__dirname, '../../src');

export const getResolversConfig = (options: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', 'jsx', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {
            '@app': path.resolve(sourceDirectoryPath, 'app'),
            '@entities': path.resolve(sourceDirectoryPath, 'entities'),
            '@features': path.resolve(sourceDirectoryPath, 'features'),
            '@pages': path.resolve(sourceDirectoryPath, 'pages'),
            '@shared': path.resolve(sourceDirectoryPath, 'shared'),
            '@widgets': path.resolve(sourceDirectoryPath, 'widgets'),
        },
    }
}