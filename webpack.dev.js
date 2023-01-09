const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',

    devServer: {
        port: 5200,
        historyApiFallback: true,
    },

    output: {
        publicPath: "http://localhost:5200/",
    },
});