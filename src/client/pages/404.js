import React from "react";
import Layout from "../global/components/Layout";

/**
 * React Router's Static Router renames the context to
 * staticContext. Default to an empty object because in
 * the client side router, staticContext won't exist.
 */
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <Layout>
            <h3>Ooops, route not found</h3>
        </Layout>
    );
};

export default {
    component: NotFoundPage
};
