import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import Sidebar from "react-sidebar";

import Header from "../components/Header";
import SideBarContent from "../components/Sidebar";
import SidebarStyles from '../components/SidebarStyles';

import '../../assets/css/app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <div>
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
                    sidebarClassName={"w-full md:w-1/3"}
                    styles={SidebarStyles}
                >
                    <Header onSetSidebarOpen={this.onSetSidebarOpen} />
                    {renderRoutes(this.props.route.routes)}
                </Sidebar>
            </div>
        );
    }
}

export default {
    component: App
};
