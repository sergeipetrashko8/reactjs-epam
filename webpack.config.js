const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

/** 
 * Common webpack config.
 * @type {import('webpack').Configuration} */
const config = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules']
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'built')
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
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
            open: true,
            contentBase: path.resolve(__dirname, 'built')
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
