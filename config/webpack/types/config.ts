type BuildMode = 'production' | 'development';

interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
export interface BuildEnv {
    mode: BuildMode;
    port: number;
}