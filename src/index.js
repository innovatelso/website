/* Package Imports
---------------------------------------------------- */
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import { matchRoutes } from "react-router-config";
import isDev from "isdev";

/* Local Imports
---------------------------------------------------- */
import routes from "./client/routes";
import webpackConfig from "../config/webpack.client.dev";
import config from "../config/application.config.js";
import renderer from "./server/renderer";

const PORT = config.get("port");
const app = express();

app.use(express.static("public"));

if (isDev) {
    const compiler = webpack(webpackConfig);
    app.use(
        webpackDevMiddleware(compiler, {
            hot: true,
            filename: webpackConfig.output.filename,
            publicPath: webpackConfig.output.publicPath,
            stats: {
                assets: true,
                modules: false,
                hash: false,
                version: false,
                colors: true
            },
            historyApiFallback: true
        })
    );

    app.use(
        webpackHotMiddleware(compiler, {
            log: console.log,
            path: "/__webpack_hmr",
            heartbeat: 4 * 1000
        })
    );
}

app.get("*", (req, res) => {
    const promises = matchRoutes(routes, req.path)
        /**
         * Map over each route and if there is a loadData method on the component
         * then add it to the array of promises.
         */
        .map(({ route }) => {
            return route.loadData ? route.loadData() : null;
        })

        /**
         * If the item in the promises array is a promise
         * wrap it in another promise so that even error are resolved
         * and a error message can be displayed on the client.
         */
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    return promise.then(resolve).catch(resolve);
                });
            }
        });

    /**
     * Exectue all Promises and return
     * rendered page.
     */
    Promise.all(promises).then(() => {
        const context = {};

        const renderedContent = renderer(req, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send(renderedContent);
    });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} \n\n`);
});
