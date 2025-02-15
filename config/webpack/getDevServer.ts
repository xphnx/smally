import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export const getDevSever = (options: BuildOptions): DevServerConfiguration => ({
    port: options.port,
    open: true
})