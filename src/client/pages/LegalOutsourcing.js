import React from "react";
import Layout from "../global/components/Layout";

const LegalOutsourcing = () => (
    <Layout pin={false} className="md:mt-10">
        <h1 className="h1">Legal Outsourcing</h1>
        <div className="md:w-2/3">
            <p className="my-4">
                We provide legal outsourcing services to global firms from Barbados.
            </p>
            <p className="my-8">
                Benefits of choosing a nearshore jurisdiction for your outsourced solutions –
                <ul className="my-4">
                    <li className="my-2">English is our first language</li>
                    <li className="my-2">We have a literacy rate of 99% and a University of the West Indies campus in Barbados</li>
                    <li className="my-2">Our highly skilled labour pool includes many university graduates</li>
                    <li className="my-2">We are on the same time zone as New York and Toronto</li>
                    <li className="my-2">Our pricing is competitive with Indian solutions</li>
                    <li className="my-2">If you are considering a captive solution, our quality of life is unbeatable</li>
                </ul>
            </p>
            <p className="my-8">
                We have the human resources, intellectual capital and no language barrier, all on a paradise island close to home.   
            </p>
            <p className="my-4">
                Let’s talk.
            </p>
        </div>
    </Layout>
);

export default {
    component: LegalOutsourcing
};
