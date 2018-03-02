import React from "react";
import Layout from "../global/components/Layout";

import FeifaLogo from '../assets/images/feifa-logo.png'

const About = () => (
    <Layout>
        <h1 className="h1">About</h1>
        <div className="flex">
            <div className="w-3/4">
                <p className="my-4">
                    For international firms with global focus looking at new or&#10;existing jurisdictions to conduct business, service existing&#10;clients or just needing a fresh approach.
                </p>

                <p className="my-4">
                    Innovate LSO o&atilde;ers a wealth of experience via an extensive panel&#10;of preferred suppliers supervised by an internationally&#10;experienced management team. A global outreach on your doorstep.
                </p>
            </div>
            <div className="1/4">
                <img src={FeifaLogo} className="w-1/5" />
            </div>
        </div>
    </Layout>
);

export default {
    component: About
};
