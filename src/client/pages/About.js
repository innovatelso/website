import React from "react";
import Layout from "../global/components/Layout";

const About = () => (
    <Layout>
        <h1 className="text-2xl text-purple my-4">About</h1>
        <div>
            <p className="my-4">
                About text
            </p>

            <p className="my-4">about text 2</p>
        </div>
    </Layout>
);

export default {
    component: About
};
