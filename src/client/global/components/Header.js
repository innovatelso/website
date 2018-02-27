import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";

import SideBarContent from "./Sidebar";
import MenuIcon from '../../assets/icons/menu.svg'


export default ({ onSetSidebarOpen }) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-6 pr-0">
            {/* Purpe Circle */}
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple" />
            </div>

            {/* Menu */}
            <div className="block">
                <button
                    onClick={() => onSetSidebarOpen(true)}
                    className="flex items-center px-3 py-2 text-purple block w-24 h-24"
                >
                <img src={MenuIcon} alt="Menu" className=""/>
                </button>
            </div>
        </nav>
    );
};
