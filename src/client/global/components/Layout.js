import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Layout extends Component {
    static defaultProps = {
        pin: true
    }

    render() {
        return (
            <div className={` mx-4 md:mx-10 md:mb-8 ${(this.props.pin) ? "md:fixed md:pin-b" : ""}`}>
                {this.props.children}
            </div>
        );
    }
}
