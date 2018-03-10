import React, { Component } from "react";
import { Link } from "react-router-dom";

import SideBarContent from "./Sidebar";
import MenuIcon from '../../assets/icons/menu.svg'
import LogoFull from "../../assets/images/logo-full.svg";


export default ({ setSidebarOpenState }) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 mx-2 md:mx-10">
            {/* Purpe Circle */}
            <div className="flex items-center flex-no-shrink text-white">
                <img src={LogoFull} alt="Logo" className="display-none md:block lg:block md:visible lg:visible w-64 h-full" />
                <div className="visible md:invisible lg:invisible rounded-full h-12 w-12 flex items-center justify-center bg-purple mx-2" />
            </div>

            {/* Menu */}
            <div className="block lg:mr-6">
                <button
                    onClick={() => setSidebarOpenState(true) }
                    className="flex items-center text-purple block"
                >
                <img src={MenuIcon} alt="Menu" className="w-16"/>
                </button>
            </div>
        </nav>
    );
};
