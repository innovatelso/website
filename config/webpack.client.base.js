const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
    // Tell webpack the root file of our
    // server application
    entry: ["./src/client/app.js"],

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: "js/app.js",
        path: path.resolve(__dirname, "../public/assets")
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./images/",
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
                            outputPath: "./fonts/",
                            publicPath: "/assets/fonts"
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = merge(baseConfig, config);
