import React, { Component } from "react";
import { Link } from "react-router-dom";

import SideBarContent from "./Sidebar";
import MenuIcon from '../../assets/icons/menu.svg'
import LogoFull from "../../assets/images/lso-logo-full.svg";


export default ({ setSidebarOpenState }) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 py-6 mx-2 md:mx-10">
            {/* Purpe Circle */}
            <div className="flex items-center flex-no-shrink text-white">
                <Link to="/">
                    <img src={LogoFull} alt="Logo" className="display-none md:block lg:block md:visible lg:visible w-128 h-full" />
                    <div className="visible md:display-none md:invisible rounded-full h-12 w-12 flex items-center justify-center bg-purple mx-2" />
                </Link>
            </div>

            {/* Menu */}
            <div className="block">
                <button
                    onClick={() => setSidebarOpenState(true)}
                    className="flex items-center text-purple block"
                >
                    <img src={MenuIcon} alt="Menu" className="w-16" />
                </button>
            </div>
        </nav>
    );
};
