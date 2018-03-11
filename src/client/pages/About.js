import React from "react";
import Layout from "../global/components/Layout";

import FeifaLogo from '../assets/images/feifa-logo.png'

const About = () => (
    <Layout>
        <div className="flex">
            <div className="flex-1">
                <h1 className="h1 font-bold">About</h1>
                <div className="flex-2">
                    <p className="my-4">
                        For international firms with global focus looking at new or&#10;existing jurisdictions to conduct business, service existing&#10;clients or just needing a fresh approach.
                    </p>

                    <p className="my-4">
                        Innovate LSO o&atilde;ers a wealth of experience via an extensive panel&#10;of preferred suppliers supervised by an internationally&#10;experienced management team. A global outreach on your doorstep.
                    </p>
                </div>
            </div>
            <div className="display-none md:flex-1 flex items-end justify-end">
                <img src={FeifaLogo} className="display-none md:block w-1/5 mb-4" />
            </div>
        </div>
    </Layout>
);

export default {
    component: About
};
