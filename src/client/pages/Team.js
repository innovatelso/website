import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Layout from "../global/components/Layout";

const Team = () => (
    <Layout>
        <h1 className="text-2xl text-purple my-4">Team</h1>
        <Tabs>
            <TabList className="list-reset flex">
                <Tab className="flex-1">Julia</Tab>
                <Tab className="flex-1">Alex</Tab>
                <Tab className="flex-1">Alistair</Tab>
            </TabList>
            <TabPanel>
                <div>
                    <p className="my-4">Julia</p>

                    <p className="my-4">about text 2</p>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <p className="my-4">Alex</p>

                    <p className="my-4">about text 2</p>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <p className="my-4">Alistair</p>

                    <p className="my-4">about text 2</p>
                </div>
            </TabPanel>
        </Tabs>
    </Layout>
);

export default {
    component: Team
};
