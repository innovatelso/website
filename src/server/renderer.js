/* Package Imports
---------------------------------------------------- */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import isDev from "isdev";

/* Local Imports
---------------------------------------------------- */
import routes from "../client/routes";
import stylesheet from "../client/assets/css/app.css";

/* Render Document
---------------------------------------------------- */
export default (req, context) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(routes)}</div>
        </StaticRouter>
    );

    let css = "";

    if (isDev) {
        css = renderToString(
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        );
    }

    const helmet = Helmet.renderStatic();

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${
                isDev
                    ? css
                    : '<link rel="stylesheet" type="text/css" href="/assets/css/app.css">'
            }
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/assets/js/app.js"></script>
        </body>
        </html>
   `;
};
