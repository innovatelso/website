import React from "react";
import Layout from "../global/components/Layout";

const Outsourcing = () => (
    <Layout>
        <h1 className="h1 text-purple my-4">Outsourcing</h1>
        <div className="md:w-2/3">
            <p className="my-4">
                It’s one thing to outsource, it’s another to undertake it
                correctly. This is an area of specialist knowledge that can, if
                utilised correctly, increase productivity for your firm in
                addition to making cost savings.
            </p>

            <p className="my-4">
                It also provides an external view into your business with at
                least a 2nd and 3rd set of eyes on every aspect of your
                operations, which then extends inwards to all other aspects of
                your business. Core areas covered are legal, accountancy and
                financial.
            </p>
        </div>
    </Layout>
);

export default {
    component: Outsourcing
};
