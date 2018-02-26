const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const WebpackNotifier = require("webpack-notifier");

const baseConfig = require("./webpack.client.base.js");

delete baseConfig.entry;

const config = {
    entry: [
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
        "./src/client/app.js"
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                path: "./config/postcss.config.js"
                            }
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifier({
            title: "SSR-BOILERPLATE",
            excludeWarnings: true,
            alwaysNotify: false
            // contentImage: path.join(
            //     __dirname,
            //     "../src/assets/images/logoblack.png"
            // )
        })
    ]
};

module.exports = merge(baseConfig, config);
