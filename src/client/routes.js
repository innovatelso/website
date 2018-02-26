import React from "react";

import App from "../client/global/containers/App";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true
            },
            {
                ...NotFoundPage
            }
        ]
    }
];
