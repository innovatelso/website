const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
    // Inform webpack that we're building a bundle
    // for nodeJs, rather than for the browser
    target: "node",

    // Tell webpack the root file of our
    // server application
    entry: "./src/index.js",

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../build"),
        publicPath: "/"
    },

    // Modules / Rules
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
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./assets/images/",
                            publicPath: "/assets/images"
                        }
                    }
                ]
            },
            {
                test: /^(?!.*\.generated\.(ttf|eot|woff|woff2|otf)$).*\.(ttf|eot|woff|woff2|otf)$/,
                use: ['css-loader', 'fontface-loader'],
            },
            {
                test: /\.generated.(ttf|eot|woff|woff2|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./assets/fonts/",
                            publicPath: "/assets/fonts"
                        }
                    }
                ]
            }
        ]
    },

    stats: {
        assets: true,
        modules: false,
        hash: false,
        version: false,
        colors: true
    },

    // Ignore node_modules
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
