import { ResolveOptions } from 'webpack';

export const getResolversConfig = (): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}