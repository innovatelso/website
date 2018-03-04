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
                    plugins: ["transform-object-rest-spread", "transform-class-properties"]
                }
            }
        ]
    },

    resolve: {
        modules: [
            'src',
            'node_modules'
        ]
    }
};
