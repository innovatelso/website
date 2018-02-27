module.exports = {
    // Tell webpack to run babel on every
    // file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "react",
                        ["env", { targets: { browsers: ["last 2 versions"] } }]
                    ],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.(otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "assets/fonts/"
                        }
                    }
                ]
            }
        ]
    }
};
