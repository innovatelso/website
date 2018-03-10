import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import isDev from 'isdev';

import routes from "./routes";
import "./assets/css/app.css";

ReactDOM.hydrate(
    <BrowserRouter>
        <div>{renderRoutes(routes)}</div>
    </BrowserRouter>,
    document.querySelector("#root")
);

if (isDev) {
    if (module.hot) {
        module.hot.accept();
    }
}
