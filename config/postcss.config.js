var isDev = require("isDev");
var tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [
        tailwindcss("./config/tailwind.config.js"),
        require("precss"),
        require("postcss-cssnext"),
        (!isDev) ? require("cssnano") : ''
    ]
};
