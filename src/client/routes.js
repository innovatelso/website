import React from "react";
import { Redirect } from 'react-router';

import App from "../client/global/containers/App";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";

import AboutPage from "./pages/About";
import GlobalSolutionsPage from "./pages/GlobalSolutions";
import LegalOutsourcingPage from "./pages/LegalOutsourcing";
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
                ...GlobalSolutionsPage,
                path: "/global-solutions",
                exact: true
            },
            {
                ...LegalOutsourcingPage,
                path: "/legal-outsourcing"
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
