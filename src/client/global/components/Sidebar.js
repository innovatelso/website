import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu';

import CloseIcon from '../../assets/icons/close.svg';


export default ({ isOpen, setSidebarOpenState }) => {
    return (
        <Menu
            noOverlay
            isOpen={isOpen}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            right
            customBurgerIcon={false}
            width={"375px"}
        >
            <div className="w-full h-full">
                <div className="flex w-full h-full text-white bg-purple text-2xl">
                    <div className="flex-1">
                        <ul className="list-reset p-8 md:ml-8">
                            <li className="pb-8">
                                <Link
                                    onClick={() => setSidebarOpenState(false)}
                                    to="/"
                                    className="text-white no-underline hover:underline"
                                >
                                    About
                                    </Link>
                            </li>
                            <li className="pb-8">
                                <Link
                                    onClick={() => setSidebarOpenState(false)}
                                    to="legal-solutions"
                                    className="text-white no-underline hover:underline"
                                >
                                    Legal Solutions
                                    </Link>
                            </li>
                            <li className="pb-8">
                                <Link
                                    onClick={() => setSidebarOpenState(false)}
                                    to="outsourcing"
                                    className="text-white no-underline hover:underline"
                                >
                                    Outsourcing
                                    </Link>
                            </li>
                            <li className="pb-8">
                                <Link
                                    onClick={() => setSidebarOpenState(false)}
                                    to="team"
                                    className="text-white no-underline hover:underline"
                                >
                                    Team
                                    </Link>
                            </li>
                            <li className="pb-8">
                                <Link
                                    onClick={() => setSidebarOpenState(false)}
                                    to="associations"
                                    className="text-white no-underline hover:underline"
                                >
                                    Associations
                                    </Link>
                            </li>
                            <li className="pb-8">
                                <Link
                                    onClick={() => setSidebarOpenState(false)}
                                    to="contact"
                                    className="text-white no-underline hover:underline"
                                >
                                    Contact
                                    </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 p-4 text-right">
                        <button onClick={() => setSidebarOpenState(false)} className="w-16 h-16">
                            <img src={CloseIcon} alt="Close" />
                        </button>
                    </div>
                </div>
            </div>
        </Menu>
    );

};
