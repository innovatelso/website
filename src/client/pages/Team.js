import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Layout from "../global/components/Layout";

import Julia from '../assets/images/julia.jpg';
import Alex from '../assets/images/alex.jpg';
import Alistair from '../assets/images/alistair.jpg';

const Team = () => (
    <Layout pin={false}>
        <Tabs className="md:flex md:flex-row-reverse">
            <div className="md:w-1/3 md:flex md:justify-end md:items-center">
                <TabList className="list-reset flex flex-row mb-6 md:flex-col items-end">
                    <Tab className="mr-4 md:mb-4">Julia <span className="display-none md:inline">Hope</span></Tab>
                    <Tab className="mr-4 md:mb-4">Alex <span className="display-none md:inline">Morris</span></Tab>
                    <Tab className="mr-4 md:mb-4">Alistair <span className="display-none md:inline">Peat</span></Tab>
                </TabList>
            </div>
            <div className="md:w-2/3">
                <TabPanel>
                    <div>
                        <img className="block h-48 rounded-full mx-auto mb-4 md:display-none" src={Julia} alt="Julia"/>
                        <h3 className="h1">CEO & Founder</h3>
                        <p className="my-4">Julia is a senior executive and&#10;solicitor of the Senior Courts of&#10;England &amp; Wales (now nonpractising)&#10;who has practised law&#10;(international structuring, corporate,&#10;commercial and financial services)&#10;for many years in London, England&#10;and also Bermuda. Some of Julia&rsquor;s&#10;legal work included advising on&#10;structuring and capitalisation of&#10;companies, M&amp;A deals including&#10;methods of acquisition and capital&#10;market transactions. In 2008 Julia&#10;relocated to Barbados and worked&#10;in the international business sector in&#10;senior management positions.</p>
                        <p className="my-4">In her capacity as a solicitor in the&#10;UK and an attorney in Bermuda Julia&#10;advised boards on director duties&#10;and corporate governance matters&#10;in accordance with local law. In&#10;Barbados, Julia has worked with&#10;directors on a multitude of issues&#10;across a wide variety of company&#10;sectors</p>
                        <p className="my-4">In 2013 Julia founded Innovate LSO&#10;Solutions, and her team have since&#10;been providing legal solutions and&#10;outsourcing services to international&#10;companies from Barbados.</p>
                        <p className="my-4">Passionate about international&#10;business, Julia is also a director and&#10;the 1st VP of the Barbados&#10;International Business Association&#10;(BIBA) and leads the Barbados&#10;chapter of JV Harmony, a UK&#10;founded professional networking&#10;organisation. Julia has also worked&#10;as a mentor for the Women&#10;Innovators Network in the Caribbean&#10;(WINC), an acceleration program for&#10;female entrepreneurs in the&#10;Caribbean helping women to fast&#10;track the growth of their businesses.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <img className="block h-48 rounded-full mx-auto mb-4 md:display-none" src={Alex} alt="Alex"/>
                        <h3 className="h1">Head of UK</h3>
                        <p className="my-4">Alex is an Independent Financial&#10;Adviser and has been a pension and&#10;investment adviser to UK and&#10;International clients for 18 years.&#10;Through his firm Financial&#10;Relationships LLP, his specialist&#10;services include advising high net&#10;worth individuals, the provision of&#10;corporate employee benefits and&#10;business consultancy.</p>
                        <p className="my-4">In addition to founding Financial&#10;Relationships LLP, Alex is actively&#10;involved with numerous businesses&#10;and charities. Alex is a Non-Exec&#10;Director of Cause4, provides&#10;advisory services to Invest Barbados&#10;and also found the JV Harmony&#10;networking group. Financial&#10;Relationships LLP is a full member of&#10;the Federation of European IFAs&#10;(FEIFA).</p>
                        <p className="my-4">Charity wise Alex is a trustee and&#10;treasurer of Signal and Crime in&#10;Mind. He also helped set up the&#10;Trustee Leadership Program with&#10;Cause4 and Close Brothers. With&#10;exciting times ahead there is a lot&#10;more in the pipeline to come on all&#10;fronts.</p>
                        <p className="my-4">Financial Relationships has been&#10;built on the premise of making a&#10;compliant, ethical profit working with&#10;and for its clients. By building an&#10;international network over the past&#10;25 years it is fair to say that if we&#10;can&rsquor;t advise on something we will be&#10;able to bring in a tried and tested&#10;expert who can.</p>
                        <p className="my-4">
                            For further information on the firm<br />please see<br />
                            <a className="underline text-black" href="www.financialrelationships.co.uk">www.financialrelationships.co.uk</a>
                        </p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <img className="block h-48 rounded-full mx-auto mb-4 md:display-none" src={Alistair} alt="Alistair"/>
                        <h3 className="h1">Head of Africa and Middle East</h3>
                        <p className="my-4">Alastair has over 25 years&rsquor; experience in endto-&#10;end Supply Chain Management and&#10;Consultancy. After 4 years in the military, he&#10;attended Rhodes University, South Africa&#10;where he graduated with a Business&#10;Economics Degree. In the following years he&#10;added a Chartered Institute of Procurement&#10;and Supply Certification as well as a&#10;Chartered Institute of Logistics and Transport&#10;Certification.</p>
                        <p className="my-4">Work experience includes international&#10;contracts with Tesco, Sainsbury, Waitrose and&#10;Marks and Spencer&rsquor;s. Alastair specializes in&#10;the Fresh Produce Sector but has also vast&#10;experience in the hospitality and catering&#10;environment. Currently he is working on a&#10;Food Waste Project in partnership with the UK&#10;Environmental Agency.</p>
                        <p className="my-4">He has worked in Value Chain Management&#10;with collaboration in Finance, Marketing,&#10;Operations, Sales, Logistics, Operations&#10;Planning (including manufacturing footprint&#10;and source), Innovation, Process Optimisation,&#10;Procurement, Low Cost Country Sourcing&#10;(LCCS), New Product Development, R&amp;D,&#10;S&amp;OP, Production Planning &amp; Scheduling and&#10;Quality/Safety (EHS). Lean implementation,&#10;development and execution.</p>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    </Layout>
);

export default {
    component: Team
};
