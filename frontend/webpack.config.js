// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};