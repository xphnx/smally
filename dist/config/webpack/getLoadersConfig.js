import MiniCssExtractPlugin from "mini-css-extract-plugin";
export var getLoadersConfig = function (_a) {
    var isDev = _a.isDev;
    var cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: function (path) { return Boolean(path.includes('.module.')); },
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash.base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    };
    var tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        tsLoader,
        cssLoader
    ];
};
