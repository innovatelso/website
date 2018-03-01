import React from "react";
import Layout from "../global/components/Layout";

const Associations = () => (
    <Layout>
        <h1 className="text-2xl text-purple my-4">Associations</h1>
        <div>
            <div className="mb-4">
                {/* BIBA */}
                <h3 className="text-xl text-purple">BIBA</h3>
                <span className="text-xl">Member, Director and 1st VP</span>
                <p className="my-4">
                    The Barbados International Business Association (BIBA) is a
                    private sector organization comprising companies engaged in
                    international business in Barbados and companies which are
                    otherwise strategically associated with this sector.
            </p>
                <a className="text-black underline" href="http://biba.bb/">http://biba.bb/</a>
            </div>
            <div className="mb-4">
                {/* FEIFA */}
                <h3 className="text-xl text-purple">FEIFA</h3>
                <span className="text-xl">Associate Member</span>
                <p className="my-4">
                    FEIFA is a trade association that represents English-speaking
                    Financial Advisers operating throughout mainland Europe. Whilst
                    it exists to assist such businesses and individuals, it also
                    aims to increase professional and technical standards of advice
                for the ultimate benefit of consumers. <br /> The Federation
                    provides a strong voice for the adviser community across Europe
                    and beyond; representing the sector with financial institutions
                    and, where relevant, with governments and regulatory bodies.
            </p>
                <a className="text-black underline" href="https://feifa.eu/">https://feifa.eu/</a>
            </div>
            <div className="mb-4">

                {/* JV Harmony */}
                <h3 className="text-xl text-purple">JV Harmony</h3>
                <span className="text-xl">Barbados Chapter Lead & Member</span>
                <p className="my-4">
                    An invitation only professional networking group for like-minded
                    business people who provide the highest levels of customer
                    service to their clients. The aim of JV Harmony is to provide an
                    environment for members to introduce and recommend fellow
                    members to clients, friends and colleagues with the aim of
                    growing businesses and reputations within the wider business
                    community.
            </p>
                <a className="text-black underline" href="https://www.linkedin.com/groups/4734745">
                    https://www.linkedin.com/groups/ 4734745
            </a>
            </div>
        </div>
    </Layout>
);

export default {
    component: Associations
};
