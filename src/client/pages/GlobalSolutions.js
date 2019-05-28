import React from "react";
import Layout from "../global/components/Layout";

const GlobalSolutions = () => (
    <Layout pin={false} className="md:mt-10">
        <h1 className="h1">Global Solutions</h1>
        <div className="md:w-2/3">
            <p className="my-4">
                The world of international structuring can be complex.
                Tax is no longer the sole incentive to position a business in another jurisdiction.
                There are a myriad of other exceptional reasons to locate businesses in Barbados: 
                lifestyle, access to talented human capital and excellent resources to name a few.
            </p>
            <h2 className="h2">Licensed Corporate Service Provider</h2>
            <p className="my-4">
                As a Barbados licensed Corporate Services Provider, 
                Innovate LSO provides international business solutions, 
                including formation, corporate administration and management services.
            </p>
            <h2 className="h2">Economic Substance</h2>
            <p className="my-4">
                New rules require businesses to have proper substance in jurisdictions.
                We work with multi-national companies and also with smaller ventures seeking to set up or relocate businesses to Barbados. <br /><br />
                We provide a one-stop shop, from corporate services to the hiring of employees and sourcing office accommodation.
                Our professionals will provide guidance if work permits are required. <br /><br />
                We work with local tax advisors and accountants to assist with structuring requirements. 
            </p>

            <h2 className="h2">Solutions for Other Jurisdictions</h2>
            <p className="my-4">
                We also provide solutions for BVI structures and have solid connections to excellent law firms in Bermuda and Cayman.
            </p>
        </div>
    </Layout>
);

export default {
    component: GlobalSolutions
};
