import React from "react";
import { Redirect } from 'react-router';

import App from "../client/global/containers/App";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";

import AboutPage from "./pages/About";
import LegalSolutionsPage from "./pages/LegalSolutions";
import OutsourcingPage from "./pages/Outsourcing";
import TeamPage from './pages/Team';
import AssociationsPage from './pages/Associations';
import ContactPage from './pages/Contact'

export default [
    {
        ...App,
        routes: [
            {
                ...AboutPage,
                path: "/",
                exact: true
            },
            {
                component: () => <Redirect to="/"/>,
                path: "/about-us",
            },
            {
                ...LegalSolutionsPage,
                path: "/global-solutions",
                exact: true
            },
            {
                ...OutsourcingPage,
                path: "/outsourcing"
            },
            {
                ...TeamPage,
                path: "/team",
            },
            {
                ...AssociationsPage,
                path: "/associations"
            },
            {
                ...ContactPage,
                path: "/contact"
            },
            {
                ...NotFoundPage
            }
        ]
    }
];
