import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div>
            <ul className="list-reset flex">
                <li className="px-2">
                    <Link to="/">Home Page</Link>
                </li>
                <li className="px-2">
                    <Link to="/about">About Page</Link>
                </li>
                <li className="px-2">
                    <Link to="/contact">Contact Page</Link>
                </li>
            </ul>
        </div>
    );
};
