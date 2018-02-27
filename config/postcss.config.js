var isDev = require("isDev");
var tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [
        tailwindcss("./config/tailwind.config.js"),
        require("postcss-cssnext"),
        require("precss")
        (!isDev) ? require("cssnano") : ''
    ]
};
