import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";

import SideBarContent from "./Sidebar";
import MenuIcon from '../../assets/icons/menu.svg'
import LogoFull from "../../assets/images/logo-full.svg";


export default ({ onSetSidebarOpen }) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white">
            {/* Purpe Circle */}
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <img src={LogoFull} alt="Logo" className="display-none md:block lg:block md:visible lg:visible w-64 h-full" />
                <div className="visible md:invisible lg:invisible rounded-full h-12 w-12 flex items-center justify-center bg-purple ml-6" />
            </div>

            {/* Menu */}
            <div className="block lg:mr-6">
                <button
                    onClick={() => onSetSidebarOpen(true)}
                    className="flex items-center px-3 py-2 lg:px-6 text-purple block w-24 h-24"
                >
                <img src={MenuIcon} alt="Menu" className=""/>
                </button>
            </div>
        </nav>
    );
};
