import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"

export const getLoadersConfig = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (path: string) => Boolean(path.includes('.module.')),
              localIdentName: isDev ? '[path][name]__[local]' : '[hash.base64:8]' 
            },
          }
        },
        "sass-loader",
      ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }


    return [
        tsLoader,
        cssLoader
      ]
}