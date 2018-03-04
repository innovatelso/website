var isDev = require("isDev");
var tailwindcss = require("tailwindcss");

// const cssnano = (!isDev) ? require("cssnano") : '';

module.exports = {
    plugins: [
        tailwindcss("./config/tailwind.config.js"),
        require("precss"),
        require("postcss-cssnext")
    ]
};
