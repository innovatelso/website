import React from "react";
import Layout from "../global/components/Layout";

const Outsourcing = () => (
    <Layout pin={false} className="md:mt-10">
        <h1 className="h1 text-purple my-4">Outsourcing</h1>
        <div className="md:w-2/3">
            <p className="my-4">
                Looking to purchase a property in the Caribbean? Need a reputable lawyer or accountant? 
                Need a property management company? Interested in doing business in the Caribbean but do not know where to start? <br />
                We are here to offer solutions. We work with the best in class professionals and advisors.  
                We have many years of experience working in the Caribbean and know who to choose and who to avoid! <br />
                For companies and individuals with specific outsourcing needs, e.g. accounting, financial or legal services, 
                we will work with you to provide project based or long term services.
            </p>

            <p className="my-4">
                Special Entry and Reside Permit <br/>
                For those individuals who are tired of the cold,
                wet dreary winters and wish to live in Barbados on a longer term basis there is a solution.
                The Special Entry and Reside Permit, administered by the Barbados Immigration Department, 
                is applicable to eligible persons aged 60 and over, and for a period, to younger persons 
                until they reach the age of 60, provided they satisfy the necessary requirements. 
                There are income, asset and other qualifying criterion.
            </p>

            <p className="my-4">
                We work with experienced professionals to guide you through this process. 
                Paradise is merely an application away.
            </p>
        </div>
    </Layout>
);

export default {
    component: Outsourcing
};
