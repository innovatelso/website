import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Layout from "../global/components/Layout";

const Contact = () => (
    <Layout>
        <h1 className="text-2xl text-purple my-4">Contact</h1>

        <Tabs>
            <TabList className="list-reset flex">
                <Tab className="flex-1">Barbados</Tab>
                <Tab className="flex-1">London</Tab>
            </TabList>
            <TabPanel>
                <div>
                    <p className="my-4">Barbs</p>

                    <p className="my-4">about text 2</p>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <p className="my-4">London</p>

                    <p className="my-4">about text 2</p>
                </div>
            </TabPanel>
        </Tabs>
    </Layout>
);

export default {
    component: Contact
};
