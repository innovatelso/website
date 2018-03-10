import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

import Header from "../components/Header";
import Sidebar from '../components/Sidebar';

import '../../assets/css/app.css';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            isSidebarOpen: true
        }

        this.setSidebarOpenState = this.setSidebarOpenState.bind(this);
    }

    setSidebarOpenState(state){
        this.setState({
            isSidebarOpen: state
        });
    }

    render() {
        return (
            <div id="outer-container">
                <Sidebar setSidebarOpenState={this.setSidebarOpenState} isOpen={this.state.isSidebarOpen} />
                <Header setSidebarOpenState={this.setSidebarOpenState} />
                <main id="page-wrap">
                    {renderRoutes(this.props.route.routes)}
                </main>
            </div>
        );
    }
}

export default {
    component: App
};
