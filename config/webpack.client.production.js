const webpack = require("webpack");
const path = require("path");
const glob = require("glob-all");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.client.base.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g);
    }
}

const config = {
    devtool: "none",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
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
                })
            }
        ]
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin("/css/app.css"),
        new PurgecssPlugin({
            paths: glob.sync([path.join(__dirname, "../src/**/*.js")]),
            whitelistPatterns: [/react-tabs.*$/],
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ["js"]
                }
            ]
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};

module.exports = merge(baseConfig, config);
