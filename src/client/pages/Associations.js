import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Layout from "../global/components/Layout";

const Associations = () => (
    <Layout>
        <div className="">
            <h1 className="text-2xl text-purple my-4 md:display-none">Associations</h1>
            <Tabs className="md:flex md:flex-row-reverse">
                <div className="md:w-2/3 md:flex md:justify-end">
                    <TabList className="list-reset flex mb-4 md:mb-0 md:flex-col md:items-end md:justify-end">
                        <Tab className=" react-tabs__tab text-right mr-4 md:mb-4">BIBA</Tab>
                        <Tab className=" react-tabs__tab text-right mr-4 md:mb-4">FEIFA</Tab>
                        <Tab className=" react-tabs__tab text-right mr-4 md:mb-4">JV Harmony</Tab>
                    </TabList>
                </div>
                <div>
                    <TabPanel className="mb-4">
                        <div>
                            <span className="text-xl">Member, Director and 1st VP</span>
                            <p className="my-4">
                                The Barbados International Business Association (BIBA) is a&#10;
                                private sector organization comprising companies engaged in&#10;
                                international business in Barbados and companies which are&#10;
                                otherwise strategically associated with this sector.
                        </p>
                            <a className="text-black underline" href="http://biba.bb/">http://biba.bb/</a>
                        </div>
                    </TabPanel>
                    <TabPanel className="mb-4">
                        <div>
                            <span className="text-xl">Associate Member</span>
                            <p className="my-4">
                                FEIFA is a trade association that represents English-speaking&#10;
                                Financial Advisers operating throughout mainland Europe. Whilst&#10;
                                it exists to assist such businesses and individuals, it also&#10;
                                aims to increase professional and technical standards of advice&#10;
                                for the ultimate benefit of consumers. <br /> The Federation&#10;
                                provides a strong voice for the adviser community across Europe&#10;
                                and beyond; representing the sector with financial institutions&#10;
                                and, where relevant, with governments and regulatory bodies.
                    </p>
                            <a className="text-black underline" href="https://feifa.eu/">https://feifa.eu/</a>
                        </div>
                    </TabPanel>
                    <TabPanel className="mb-4">
                        <div>
                            <span className="text-xl">Barbados Chapter Lead & Member</span>
                            <p className="my-4">
                                An invitation only professional networking group for like-minded&#10;
                                business people who provide the highest levels of customer&#10;
                                service to their clients. The aim of JV Harmony is to provide an&#10;
                                environment for members to introduce and recommend fellow&#10;
                                members to clients, friends and colleagues with the aim of&#10;
                                growing businesses and reputations within the wider business&#10;
                                community.
                            </p>
                            <a className="text-black underline" href="https://www.linkedin.com/groups/4734745">
                                https://www.linkedin.com/groups/ 4734745
                            </a>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    </Layout>
);

export default {
    component: Associations
};
