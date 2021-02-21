const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/** 
 * Common webpack config.
 * @type {import('webpack').Configuration} */
const config = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'built')
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
};

/**
 * Webpack config.
 */
module.exports = (_env, { mode: buildMode }) => {
    if (buildMode === 'development') {
        config.devtool = 'source-map';
        config.devServer = {
            compress: true,
            open: true
        };
    } else {
        config.optimization = {
            splitChunks: {
                chunks: 'all'
            },
            minimize: true
        };
    }

    return config;
};
