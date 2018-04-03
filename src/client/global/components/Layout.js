import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Layout extends Component {
    static defaultProps = {
        pin: true
    }

    render() {
        return (
            <div className={` ${this.props.className} mx-4 md:px-10 md:mx-0 md:mb-8 ${(this.props.pin) ? "md:fixed md:pin-b" : ""}`}>
                {this.props.children}
            </div>
        );
    }
}
