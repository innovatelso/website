import React, { Component } from "react";

export default class Layout extends Component {
    render() {
        return (
            <div className="flex text-center justify-center pt-8">
                {this.props.children}
            </div>
        );
    }
}
