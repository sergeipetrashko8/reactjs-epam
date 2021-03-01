const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        new CleanWebpackPlugin()
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
            }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    target: "web"
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
            minimizer: [new CssMinimizerPlugin()],
        };
    }

    return config;
};
