import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import isDev from 'isdev';

import routes from "./routes";
import "./assets/css/app.css";
import favicon16 from './assets/favicons/favicon-16x16.png';
import favicon32 from './assets/favicons/favicon-32x32.png';
import appleTouchIcon from './assets/favicons/apple-touch-icon.png';
import androidChrome from './assets/favicons/android-chrome-96x96.png';
import safariPinned from './assets/favicons/safari-pinned-tab.svg';

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
