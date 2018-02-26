import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";

import SideBarContent from "./Sidebar";
// import menu from '../../assets/icons/menu.svg';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: true
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-white p-6">
                {/* Purpe Circle */}
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple" />
                </div>

                {/* Menu */}
                <div className="block">
                    <button
                        onClick={() => onSetSidebarOpen(true)}
                        className="flex items-center px-3 py-2 text-purple"
                    >
                    Open
                    </button>
                </div>

                <Sidebar
                    sidebar={
                        <SideBarContent
                            onSetSidebarOpen={this.onSetSidebarOpen}
                        />
                    }
                    shadow={false}
                    pullRight={true}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    sidebarClassName={"w-full"}
                >
                    <b>hello</b>
                </Sidebar>
            </nav>
        );
    }
}
