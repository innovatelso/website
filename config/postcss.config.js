var isDev = require("isDev");
var tailwindcss = require("tailwindcss");

const cssnano = (!isDev) ? require("cssnano") : '';

module.exports = {
    plugins: [
        tailwindcss("./config/tailwind.config.js"),
        require("precss"),
        cssnano,
        require("postcss-cssnext")
    ]
};
