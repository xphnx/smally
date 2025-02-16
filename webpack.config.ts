import path from 'path';
import { getWebpackConfig } from "./config/webpack/getWebpackConfig";
import { BuildEnv } from './config/webpack/types/config';

export default (env: BuildEnv) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
  }
  
  const mode = env.mode || 'development';
  const PORT = env.port || 300;

  const isDev = mode === 'development';

  const config =  getWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });

  return config;
}