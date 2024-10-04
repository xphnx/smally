import path from 'path';
import { getWebpackConfig } from "./config/webpack/getWebpackConfig";

const paths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  build: path.resolve(__dirname, 'build'),
}

const mode = 'development';
const isDev = mode === 'development';

export default getWebpackConfig({
  mode,
  paths,
  isDev
});