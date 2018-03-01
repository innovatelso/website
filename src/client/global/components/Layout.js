import React, { Component } from "react";

export default class Layout extends Component {
    render() {
        return (
            <div className="mx-4 md:mx-16 md:mb-8 md:fixed md:pin-b">
                {this.props.children}
            </div>
        );
    }
}
