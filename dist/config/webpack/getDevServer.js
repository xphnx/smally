export var getDevSever = function (options) { return ({
    port: options.port,
    historyApiFallback: true,
    open: true
}); };
