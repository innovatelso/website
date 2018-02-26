import React, { Component } from "react";

export default class Layout extends Component {
    render() {
        return (
            <div className="mx-4">
                {this.props.children}
            </div>
        );
    }
}
