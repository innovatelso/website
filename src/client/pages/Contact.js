import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Layout from "../global/components/Layout";
import GoogleMap from "../components/google-maps";

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout className="md:w-full">
                <h1 className="text-2xl text-purple my-4 md:display-none">
                    Contact
                </h1>

                <Tabs className="md:flex md:flex-col-reverse">
                    <TabList className="list-reset flex">
                        <Tab className="mr-4 react-tabs__tab">Barbados</Tab>
                        <Tab className="mr-4 react-tabs__tab">London</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="md:flex">
                            <div>
                                <p className="my-4">
                                    One Welches&#10;<br />St Thomas
                                    Barbados&#10;
                                </p>

                                <p className="my-4">
                                    Julia Hope, CEO<br />
                                    <a
                                        className="text-black no-underline"
                                        href="tel:+12465374171"
                                    >
                                        +1 246 537 4171
                                    </a>
                                    <br />
                                    <a
                                        className="text-black underline"
                                        href="mailto:jhope@innovatelso.com"
                                    >
                                        jhope@innovatelso.com
                                    </a>
                                </p>
                            </div>
                            <div className="flex justify-center md:justify-end md:w-full">
                                <div className="customMap mt-8 flex justify-center">
                                    <GoogleMap
                                        isMarkerShown
                                        lat={13.155326}
                                        lng={-59.613644}
                                    />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="md:flex">
                            <div>
                                <p className="my-4">
                                    6 Snow Hill&#10;<br />London EC1A 2AY&#10;
                                </p>

                                <p className="my-4">
                                    Alex Morris<br />
                                    <a
                                        className="text-black no-underline"
                                        href="tel:+442070027715"
                                    >
                                        +44 207 002 7715
                                    </a>
                                    <br />
                                    <a
                                        className="text-black underline"
                                        href="mailto:am@financialrelationships.co.uk"
                                    >
                                        am@financialrelationships.co.uk
                                    </a>
                                </p>
                            </div>
                            <div className="flex justify-center md:justify-end md:w-full">
                                <div className="customMap mt-8 flex justify-center">
                                    <GoogleMap
                                        isMarkerShown
                                        lat={51.517451}
                                        lng={-0.102848}
                                    />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </Layout>
        );
    }
}

export default {
    component: Contact
};
