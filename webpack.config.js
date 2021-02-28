// eslint-disable-next-line no-undef
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// eslint-disable-next-line no-undef
const path = require("path");

/**
 * Common webpack config.
 * @type {import('webpack').Configuration} */
const config = {
    entry: {
        homePage: "./src/index.js",
    },
    output: {
        path: path.resolve("built"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },

            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
    },
};

/**
 * Webpack config.
 */
// eslint-disable-next-line no-undef
module.exports = function (env, argv) {
    config.mode = argv.mode;

    if (argv.mode === "development") {
        config.devtool = "source-map";
        config.devServer = {
            compress: true,
            contentBase: path.join(__dirname, "built"),
            open: true,
        };
    }

    if (argv.mode === "production") {
        config.optimization = {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin()
            ]
        };
    }

    return config;
};
